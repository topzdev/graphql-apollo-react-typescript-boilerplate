const services = require("./services");
const jwt = require('jsonwebtoken');
const config = require("../../config");

const login = async (data) => {
    try {
        return await services.login(data);
    } catch (error) {
        throw Error(error);
    }
}


const register = async (data) => {
    try {
        return await services.register(data);
    } catch (error) {
        throw Error(error)
    }
}

const getUser = async (token) => {

    if (token && token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    if (token) {
        try {
            const decoded = jwt.verify(token, config.jwtSecret)
            return await services.getUser(decoded.id);
        } catch (error) {
            console.error(error);
            throw Error("Unathorized to access");
        }
    }

}

module.exports = { getUser, login, register }