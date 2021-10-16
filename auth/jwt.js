const jwt = require('jsonwebtoken')

const generateToken = (data) => {
    const token = jwt.sign(data, "Tushar")
    return token
}

const accessToken = (req, res, next) => {
    // console.log(req.headers)
    const token = req.headers.cookie.split('=')[1]
    const decoded = jwt.verify(token, "Tushar")
    req.data = decoded
    next()
}

module.exports = {generateToken, accessToken}