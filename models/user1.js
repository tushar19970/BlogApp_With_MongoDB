const mongoose = require('mongoose')
const validator = require('validator')


const signup = new mongoose.Schema({
    name : {
        type : String,
        required : true 
    },
    email : {
        type: String,
        required: true,
        unique: [true, "Email id is already present."],
        validate(value) {
        if (!validator.isEmail(value)) {
            throw new Error("Invalid Email");
            }
        }
    }, 
    password : {
        type : String,
        required : true
    } 
})


module.exports = mongoose.model('user_data', signup)