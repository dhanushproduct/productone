const express = require('express')
const {editprofile} = require('../Controllers/profileController')
const router = express.Router()

router.post('/editprofile/:id', editprofile)

module.exports = router