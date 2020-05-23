const router = require('express').Router()
const bodyParser = require('body-parser')
const authGuard = require('./guards/auth.guard')
const check = require('express-validator').check
const cardController = require('../controllers/card.controller')


router.get('/', authGuard.isAuth, cardController.getCard)

router.post('/', authGuard.isAuth, bodyParser.urlencoded({ extends: true }),
    check('ammount')
    .not()
    .isEmpty()
    .withMessage('amount is required')
    .isInt({ min: 1 })
    .withMessage('amount must be greater than 0'),
    cardController.postCard
)

router.post('/save', authGuard.isAuth, bodyParser.urlencoded({ extends: true }),
    check('ammount')
    .not()
    .isEmpty()
    .withMessage('amount is required')
    .isInt({ min: 1 })
    .withMessage('amount must be greater than 0'),
    cardController.postSave
)

router.post('/delete', authGuard.isAuth, bodyParser.urlencoded({ extends: true }),

    cardController.postDelete
)

module.exports = router