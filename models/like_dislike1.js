const mongoose = require('mongoose')

const like_dislike = new mongoose.Schema({
    user_id : {
        type : Number,
        unique : true,
        required : true
    },
    like : {
        type : Boolean,
        required : true
    },
    dislike : {
        type : Boolean,
        required : true
    }
})

module.exports = mongoose.model('likes_dislike', like_dislike)