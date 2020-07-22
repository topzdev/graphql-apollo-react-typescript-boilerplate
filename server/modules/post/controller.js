const models = require('../models');

module.exports = {
    postsFeed: async (include) => {
        try {
            return await models.Post.findAll({
                order: [['createdAt', 'DESC']],
                attributes: { include },
                include: [{ model: models.User, foreignKey: 'id' }]
            })
        } catch (error) {
            console.log(error)
            throw Error(error)
        }
    },
    postsByUserId: async (id, include) => {
        try {
            return await models.Post.findAll({ where: { id }, attributes: { include } });
        } catch (error) {
            throw Error(error)
        }

    },
    postById: async (id, include) => {
        try {
            return await models.Post.findByPk(id, { attributes: { include } })
        } catch (error) {
            throw Error(error)
        }
    },
    addPost: async ({ title, content, draft }) => {
        try {
            return {
                success: true,
                message: 'Post Added',
                data: await models.Post.create({
                    title, content, draft,
                    author: "448630b0-8280-45c0-a317-4502029dedb6"
                })
            }
        } catch (error) {
            throw Error(error)
        }
    },
    updatePost: async (data) => {
        try {
            const id = data.id;
            delete data.id;

            return {
                success: true,
                message: 'Post Updated',
                data: await models.Post.update(data, { where: { id } })
            }
        } catch (error) {
            throw Error(error)
        }
    },
    deletePost: async (id) => {
        try {
            return {
                success: true,
                message: 'Post Deleted',
                data: await models.Post.destroy({ where: { id } })
            }
        } catch (error) {
            throw Error(error)
        }
    }
}