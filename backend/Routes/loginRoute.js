const express = require('express')
const {login,signup, verifyotp, resendotp, getProfile, editprofile} = require('../Controllers/loginController')
const router = express.Router()

router.post('/userssignup',signup)
router.post('/userslogin',login)
router.post('/verifyOTP', verifyotp)
router.post("/resendotp", resendotp)
router.get('/getprofile/:id', getProfile)
router.put('/editprofile/:id', editprofile)

module.exports = router