const cardModel = require('../models/card.model')
const validationResult = require('express-validator').validationResult

exports.getCard = (req, res, next) => {
    cardModel.getItemsByUser(req.session.userId)
        .then(items => {
            res.render('card', {
                items: items,
                isUser: true,
                isAdmin: req.session.isAdmin
            })
        }).catch(err => {
            console.log(err)
        })
}

exports.postCard = (req, res, next) => {
    if (validationResult(req).isEmpty()) {
        cardModel.addNewItem({
            name: req.body.name,
            price: req.body.price,
            ammount: req.body.ammount,
            productId: req.body.productId,
            userId: req.session.userId,
            timestamp: Date.now(),
        }).then(() => {
            res.redirect('/card')
        }).catch(err => {
            console.log(err)
        })
    } else {
        req.flash('validationErrors', validationResult(req).array())

        res.redirect(req.session.redirectTo)
    }
}

exports.postSave = (req, res, next) => {
    if (validationResult(req).isEmpty()) {
        cardModel.editItem(req.body.cardId, {
                ammount: req.body.ammount,
                timestamp: Date.now()
            }).then(() => res.redirect('/card'))
            .catch(err => console.log(err))
    } else {
        req.flash('validationErrors', validationResult(req).array())

        res.redirect('/card')
    }
}

exports.postDelete = (req, res, next) => {
    if (validationResult(req).isEmpty()) {
        cardModel.deleteItem(req.body.cardId).then(() => res.redirect('/card'))
            .catch(err => console.log(err))
    } else {
        req.flash('validationErrors', validationResult(req).array())

        res.redirect('/card')
    }
}