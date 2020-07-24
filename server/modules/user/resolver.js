const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');
const ms = require('ms')
module.exports = {
    Query: {
        me: async (_, __, { db, req }) => {
            console.log(req.user)

            if (req.user && req.user.userId) return null;

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

            const refreshToken = jwt.sign({ id: user.id, count: user.count }, config.jwtSecret, { expiresIn: '7d' });
            const accessToken = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: '1h' });

            res.cookie('refresh-token', refreshToken, { maxAge: ms('7d') })
            res.cookie('access-token', accessToken, { maxAge: ms('1h') })


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

            const refreshToken = jwt.sign({ id: user.id, count: user.count }, config.jwtSecret, { expiresIn: '7d' });
            const accessToken = jwt.sign({ id: user.id }, config.jwtSecret, { expiresIn: '1h' });

            res.cookie('refresh-token', refreshToken, { maxAge: ms('7d') })
            res.cookie('access-token', accessToken, { maxAge: ms('1h') })

            return {
                success: true,
                message: "Account created",
                data: user
            }
        }
    }
}