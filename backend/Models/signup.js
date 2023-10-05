const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usersSchema = new Schema({
    mailid : {
        type : String,
        required : true
    },
    phonenumber : {
        type : String,
        required : true
    },
    username :{
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
},
{
    timestamps : true
})

module.exports = mongoose.model('Users',usersSchema)