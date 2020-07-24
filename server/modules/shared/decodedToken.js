const jwt = require('jsonwebtoken')
const config = require('../../config')
module.exports = (req) => {
    let token = req.headers["x-access-token"] || req.headers["authorization"];

    if (token && token.startsWith("Bearer "))
        token = token.slice(7, token.length);

    console.log(req.headers['authorization']);

    if (token) {

        try {
            const decoded = jwt.verify(token, config.jwtSecret)
            return decoded
        } catch (error) {
            throw new Error('Authentication Failed')
        }
    } else {
        return null
    }
}