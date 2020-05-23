const router = require('express').Router()
const bodyParser = require('body-parser')
const check = require('express-validator').check

const adminController = require('../controllers/admin.controller')

const adminGuard = require('./guards/admin.guard')


router.get('/add', adminGuard, adminController.getAdd)

router.post('/add', adminGuard, bodyParser.urlencoded({ extends: true }), adminController.postAdd)

module.exports = router