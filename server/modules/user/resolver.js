
module.exports = {
    Mutation: {
        login: (_, args, { db }) => {
            return db.user.login(args);
        },

        signUp: (_, args, { db }) => {
            return db.user.signUp(args)
        }
    }
}