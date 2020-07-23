const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = {
    Mutation: {
        login: (_, args, { db }) => {
            return db.user.login(args)
        },

        signUp: async (_, args, { db }) => {
            return db.user.register(args)
        }
    }
}