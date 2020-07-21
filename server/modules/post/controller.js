const models = require('../models');

module.exports = {
    postsByUserId: async (id, include) => {
        try {
            return await models.Post.findAll({ where: { id }, attributes: { include } });
        } catch (error) {
            throw Error({
                success: false,
                message: error
            })
        }

    },
    postById: async (id, include) => {
        try {
            return await models.Post.findByPk(id, { attributes: { include } })
        } catch (error) {
            throw Error({
                success: false,
                message: error
            })
        }
    },
    addPost: async ({ title, content, draft }) => {
        try {
            return await models.Post.create({ title, content, draft });
        } catch (error) {
            throw Error({
                success: false,
                message: error
            })
        }
    },
    updatePost: async (data) => {
        try {
            const id = data.id;
            delete data.id;
            return await models.Post.update(data, { where: { id } })
        } catch (error) {
            throw Error({
                success: false,
                message: error
            })
        }
    },
    deletePost: async (id) => {
        try {
            return await models.Post.destroy({ where: { id } })
        } catch (error) {
            throw Error({
                success: false,
                message: error
            })
        }
    }
}