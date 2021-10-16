const express = require('express')
const mongoose = require('mongoose')
const database = 'mongodb://localhost/User_details'
const app = express()
app.use(express.json())

mongoose.connect(database, {useNewUrlParser : true})
const con = mongoose.connection

con.on('open', () => {
    console.log('Connected successfully...')
})

const home = require('./routes/signup')
app.use('/', home)

const blogApp = require('./routes/blog')
app.use('/', blogApp)

const like_dislike = require('./routes/like_dislike')
app.use('/', like_dislike)

const port = 2022
app.listen(port, ()=> {
    console.log(`We have connected with this port no. ${port}`);
})