const express = require('express')
const {login,signup, verifyotp, resendotp} = require('../Controllers/loginController')
const router = express.Router()

router.post('/userssignup',signup)
router.post('/userslogin',login)
router.post('/verifyOTP', verifyotp)
router.post("/resendotp", resendotp)

module.exports = router