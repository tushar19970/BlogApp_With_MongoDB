const mongoose = require('mongoose')

const blog = new mongoose.Schema({
    author : {
        type : String,
        required : true,
    },
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('blog_data', blog)