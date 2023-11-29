const express = require('express')
const {login,signup} = require('../Controllers/loginController')
const router = express.Router()

router.post('/userssignup',signup)
router.post('/userslogin',login)

module.exports = router