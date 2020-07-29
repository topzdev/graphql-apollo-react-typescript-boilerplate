const { rule, not, shield } = require('graphql-shield');

const isAuthenticated = rule({ cache: 'contextual' })(
    async (parent, args, ctx, info) => {
        if (!ctx.user) throw new Error('Not authenticated')

        return ctx.user !== null;
    },
)
const permissions = shield({
    Query: {
        postsFeed: isAuthenticated,
        postsByUserId: isAuthenticated,
        postById: isAuthenticated,
    },
    Mutation: {
        login: not(isAuthenticated),
        signUp: not(isAuthenticated),

        addPost: isAuthenticated,
        updatePost: isAuthenticated,
        deletePost: isAuthenticated

    }
})

module.exports = {
    permissions,
    isAuthenticated
}