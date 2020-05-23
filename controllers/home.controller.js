const productModel = require('../models/products.model')

exports.getHome = (req, res, next) => {

    // productModel.getAllProduct().then(products => {
    //     res.render('index', {
    //         products: products
    //     })
    // })

    let category = req.query.category
    if (category && category !== 'all') {
        productModel.getProductsByCategory(category).then(products => {
            res.render('index', {
                products: products,
                isUser: true,
                isAdmin: req.session.isAdmin
            })
        })
    } else {
        productModel.getAllProduct(category).then(products => {
            res.render('index', {
                products: products,
                isUser: req.session.userId,
                isAdmin: req.session.isAdmin,
                validationErrors: req.flash('validationErrors')[0]

            })
        })

    }
}