const express = require('express')
const { accessToken } = require('../auth/jwt')
const like_dis = express.Router()
const like_dislike_data = require('../models/like_dislike1')

like_dis.post('/like', accessToken,async(req, res) => {
    const data = new like_dislike_data ({
        like : req.body.like,
        dislike : false,
        user_id : req.body.user_id
    })
    try {
        const like1 = await data.save()
        res.json(like1)
        console.log(data);
    }catch(err) {
        res.send(err.message)
    }
})

like_dis.post('/dislike',accessToken, async(req, res) => {
    const data = new like_dislike_data ({
        like : false,
        dislike : req.body.dislike,
        user_id : req.body.user_id
    })
    try {
        const like1 = await data.save()
        res.json(like1)
        console.log(data);
    }catch(err) {
        res.send(err.message)
    }
})

module.exports = like_dis