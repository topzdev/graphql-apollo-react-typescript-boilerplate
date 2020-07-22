const { parseResolveInfo } = require('graphql-parse-resolve-info')

module.exports = {
    Query: {
        postsFeed: (_, __, { db }, info) => {
            return db.post.postsFeed()
        },
        postsByUserId: (_, { id }, { db }, info) => {
            return db.post.postsByUserId(id)
        },
        postById: (_, { id }, { db }, info) => {
            return db.post.postById(id)
        }
    },

    Mutation: {
        addPost: (_, args, { db }) => {
            return db.post.addPost(args);
        },
        updatePost: (_, args, { db }) => {
            return db.post.updatePost(args)
        },
        deletePost: (_, args, { db }) => {
            return db.post.deletePost(args)
        },
    }
}