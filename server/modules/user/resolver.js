const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = {
    Mutation: {
        login: (_, { username, password }, { db }) => {
            const account = db.User.findOne({ where: { username } });

            if (!account.get({ plain: true })) return {
                success: false,
                message: 'Account is not exist'
            }


            if (!bcrypt.compare(password, account.password)) return {
                success: false,
                message: 'Password not match'
            }

            const token = jwt.sign({ id: account.id }, config.jwtSecret, { expiresIn: '24h' });


            return {
                success: true,
                message: "Logged in",
                data: token
            }
        },

        signUp: (_, { username, password }, { db }) => {
            const isExist = db.User.count({ where: { username } });

            if (isExist) return {
                success: false,
                message: 'Account already exisit'
            }

            const saltRounds = 10;
            const hashPassword = bcrypt.hash(password, saltRounds);

            const account = db.User.create({ username, password: hashPassword });

            const token = jwt.sign({ id: account.id }, config.jwtSecret, { expiresIn: '24h' })

            return {
                success: true,
                message: "Account created",
                token
            }
        }
    }
}