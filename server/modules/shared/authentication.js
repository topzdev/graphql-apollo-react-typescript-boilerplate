const { rule } = require('graphql-shield');
const { shield } = require('graphql-shield')

const isAuthenticated = rule({ cache: 'contextual' })(
    async (parent, args, ctx, info) => {
        if (!ctx.user) throw new Error('Not authenticated')

        return ctx.user !== null;
    },
)
const permissions = shield({
    Mutation: {
        addPost: isAuthenticated,
        updatePost: isAuthenticated,
        deletePost: isAuthenticated
    }
})

module.exports = {
    permissions,
    isAuthenticated
}