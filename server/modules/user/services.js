const models = require("../models");

const login = async ({ username, password }) => {


}


const register = async ({ username, password }) => {

}

const getUser = async ({ id }) => {
    const user = await models.User.findByPk(id);

    if (!user) return {
        success: false,
        message: 'Account doesnt exist'
    }

    return {
        success: true,
        message: "User Data",
        data: user
    }
}

module.exports = {
    login,
    register,
    getUser
}