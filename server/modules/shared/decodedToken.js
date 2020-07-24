const jwt = require('jsonwebtoken')
const config = require('../../config')
module.exports = (req, res, next) => {

    let token = req.cookies['access-token'];

    if (token && token.startsWith("Bearer "))
        token = token.slice(7, token.length);

    if (!token) return null

    try {
        const decoded = jwt.verify(token, config.jwtSecret)
        req.user = decoded;
    } catch (error) {
        throw new Error('Authentication Failed')
    }

    next();
}