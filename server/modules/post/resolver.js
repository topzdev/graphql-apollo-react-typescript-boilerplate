module.exports = {

    Post: {
        author: ({ userId }, _, { db, loaders: { userLoader } }) => {
            console.log('Usert', userId)
            return userLoader.load(userId)
        }
    },

    Query: {
        postsFeed: (_, __, { db }) => {
            return db.post.postsFeed()
        },
        postsByUserId: (_, args, { db }) => {
            return db.post.postsByUserId(args)
        },
        postById: (_, args, { db }) => {
            return db.post.postById(args);
        }
    },

    Mutation: {
        addPost: (_, args, { db }) => {
            return db.post.addPost(args);
        },
        updatePost: (_, args, { db }) => {
            return db.post.updatePost(args);
        },
        deletePost: (_, args, { db }) => {
            return db.post.deletePost(args);
        },
    }
}