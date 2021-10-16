const express = require('express')
const blog = express.Router()
const blog_data = require('../models/blog1')
const {generateToken, accessToken} = require('../auth/jwt')

blog.post('/create',accessToken,async(req, res) => {
    const data = new blog_data({
        author : req.body.author,
        title : req.body.title,
        description : req.body.description
    })
    try {
        const data = await data.save()
        res.send("Your data has inserted")
    }catch(err) {
        res.send("Error" + err)
    }
})

blog.get('/getAll',accessToken, async(req, res) => {
    try {
        const data = await blog_data.find()
        res.send(data)
    }catch (err){
        res.send('Error' + err)
    }
}) 

blog.get('/get/:id', accessToken,async(req, res) => {
    try {
        const data = await blog_data.findById(req.params.id)
        res.send(data)
    }catch (err){
        res.send('Your id is not exist..')
    }
}) 

blog.put('/update/:id', accessToken,async(req, res) => {
    try{
        const data = await blog_data.findById(req.params.id)
        data.author = req.body.author,
        data.title = req.body.title,
        data.description = req.body.description
        const data1 = await data.save()
        console.log(data1);
        res.send('your data have updated successfully. ')
    }catch(err) {
        res.send("Error" + err)
    }
})

blog.delete('/delete/:id', accessToken,async(req, res) => {
    try{
        const data = await blog_data.findById(req.params.id)
        const data1 = await data.remove()
        res.send("Your Id have deleted successfully..")
    }catch(err) {
        res.send("Error" + err)
    }
})

module.exports = blog