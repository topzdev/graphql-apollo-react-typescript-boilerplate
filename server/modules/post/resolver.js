const { parseResolveInfo } = require('graphql-parse-resolve-info')
const models = require('../models')

module.exports = {

    Post: {
        author: ({ userId }, _, { db, userLoader }) => {
            return userLoader.load(userId)
        }
    },

    Query: {
        postsFeed: (_, __, { db }) => {
            return db.Post.findAll({
                order: [['createdAt', 'DESC']]
            })
        },
        postsByUserId: (_, { id }, { db }) => {
            return db.Post.findAll({
                where: { userId: id },
                attributes: { include },
            });
        },
        postById: (_, { id }, { db }) => {
            return db.Post.findByPk(id)
        }
    },

    Mutation: {
        addPost: (_, { title, content, draft }, { db }) => {
            return {
                success: true,
                message: 'Post Added',
                data: db.Post.create({
                    title, content, draft,
                    // remove when done with user id
                    userId: "66073b8a-8c20-4f73-a33e-b0ddab762065"
                })
            }
        },
        updatePost: (_, args, { db }) => {
            const id = args.id;
            delete args.id;

            return {
                success: true,
                message: 'Post Updated',
                data: db.Post.update(args, { where: { id } })
            }
        },
        deletePost: (_, { id }, { db }) => {
            return {
                success: true,
                message: 'Post Deleted',
                data: db.Post.destroy({ where: { id } })
            }
        },
    }
}