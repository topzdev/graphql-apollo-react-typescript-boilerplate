const models = require("../models");

const login = async ({ username, password }) => {
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
        token
    }
}


const register = async ({ username, password }) => {
    const isExist = await db.User.count({ where: { username } });

    if (isExist) return {
        success: false,
        message: 'Account already exisit'
    }

    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const account = await db.User.create({ username, password: hashPassword });

    const token = jwt.sign({ id: account.id }, config.jwtSecret, { expiresIn: '24h' })

    return {
        success: true,
        message: "Account created",
        token
    }
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