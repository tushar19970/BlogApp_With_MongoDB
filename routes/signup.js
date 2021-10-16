const express = require('express')
const router = express.Router()
const user = require('../models/user1')
const bcrypt = require('bcrypt')
const {generateToken, accessToken} = require('../auth/jwt')

router.post('/signup', async(req, res) => {
    try{
        const pass = await bcrypt.hash(req.body.password, 10)
        const users = {
            name : req.body.name,
            email : req.body.email,
            password : pass
        }
        const data = await user.insertMany(users)
        console.log(data)
        res.send("Signup has successfully..")
    } catch(err) {
        res.send(err.message)
    }
})

router.post('/login', async(req, res) => {
    try {
        const data = await user.findOne({'email' : req.body.email})
        const comp = await bcrypt.compare(req.body.password, data.password)
        if (comp){
            const token = generateToken(req.body.email)
            res.cookie("token",token)
            res.send("You have login this page successfully...")
            console.log('(You have login this page successfully...)');
        } else {
            res.send("User is not finding")
        }
    } catch(err) {
        res.send(err.message)
    }
})

router.put('/update_user/:id', accessToken, async(req, res) => {
    try{
        const data = await user.findById(req.params.id)
        data.name = req.body.name
        data.email = req.body.email
        data.password = req.body.password
        const data1 = await data.save()
        res.send("Your data has updated successfully..")
    }catch(err){
        res.send(err.message)
    }
})

router.delete('/delete_user/:id', accessToken, async(req, res) => {
    try{
        const data = await user.findById(req.params.id)
        const data1 = await data.remove()
        res.send("Your data has deleted successfully..")
    }catch(err) {
        res.send(err.message)
    }
})

module.exports = router