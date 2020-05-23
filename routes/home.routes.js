const router = require('express').Router()

const authGUrad = require('./guards/auth.guard')

const homeController = require('../controllers/home.controller')



router.get('/', homeController.getHome)


module.exports = router