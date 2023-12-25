const express = require('express')
const {editprofile, getProfile} = require('../Controllers/profileController')
const router = express.Router()

router.post('/editprofile/:id', editprofile)

router.get('/getprofile/:id', getProfile)

module.exports = router