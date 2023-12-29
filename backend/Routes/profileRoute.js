const express = require('express')
const {editprofile, getProfile} = require('../Controllers/profileController')
const router = express.Router()

router.post('/editprofile/:token', editprofile)

router.get('/getprofile/:token', getProfile)

module.exports = router