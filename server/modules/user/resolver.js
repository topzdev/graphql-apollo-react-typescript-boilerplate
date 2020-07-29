const bcrypt = require('bcrypt');
const { createToken, setCookies } = require('../../utils/auth');
const models = require('../models');

module.exports = {
    Query: {
        me: async (_, __, { db, req }) => {
            if (!req.user) return {
                success: false,
                message: 'Login first',
                data: null
            };

            return {
                success: true,
                message: 'User fetched',
                data: await db.User.findByPk(req.user.id)
            }
        }
    },
    Mutation: {
        login: async (_, { username, password }, { db, res }) => {
            const user = await db.User.findOne({ where: { username } });

            if (!user.get({ plain: true })) return {
                success: false,
                message: 'Account is not exist'
            }


            if (!await bcrypt.compare(password, user.password)) return {
                success: false,
                message: 'Password not match'
            }

            setCookies(createToken(user), res);

            return {
                success: true,
                message: "Logged in",
                data: user
            }
        },

        signUp: async (_, { username, password }, { db, res }) => {
            const isExist = await db.User.count({ where: { username } });

            if (isExist) return {
                success: false,
                message: 'Account already exisit'
            }

            const saltRounds = 10;
            const hashPassword = await bcrypt.hash(password, saltRounds);

            const user = await db.User.create({ username, password: hashPassword });

            setCookies(createToken(user), res)

            return {
                success: true,
                message: "Account created",
                data: user
            }
        },

        invalidateTokens: async (_, __, { req }) => {
            if (!req.user.id) return false

            const user = await models.User.findByPk(req.user.id);

            (await user.increment('count')).save();

            return true;

        }
    }
}