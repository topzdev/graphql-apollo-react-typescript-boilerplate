const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = {
    login: async ({ username, password }) => {
        try {
            const account = await models.User.findOne({ where: { username } });

            if (!account.get({ plain: true })) return {
                success: false,
                message: 'Account is not exist'
            }


            if (!await bcrypt.compare(password, account.password)) return {
                success: false,
                message: 'Password not match'
            }

            const token = jwt.sign({ id: account.id }, config.jwtSecret, { expiresIn: '24h' });


            return {
                success: true,
                message: "Logged in",
                data: token
            }
        } catch (error) {

            throw Error(error)
        }
    },

    signUp: async ({ username, password }) => {
        try {
            const isExist = await models.User.count({ where: { username } });

            if (isExist) return {
                success: false,
                message: 'Account already exisit'
            }

            const saltRounds = 10;
            const hashPassword = await bcrypt.hash(password, saltRounds);

            const account = models.User.create({ username, password: hashPassword });

            const token = jwt.sign({ id: account.id }, config.jwtSecret, { expiresIn: '24h' })

            return {
                success: true,
                message: "Account created",
                token
            }
        } catch (error) {
            throw Error(error)
        }
    }
}