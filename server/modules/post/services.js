const models = require("../models");

const fetchPosts = () => {
    return models.Post.findAll({
        order: [['createdAt', 'DESC']]
    })
}

const fetchPostByUser = ({ id }) => {
    return models.Post.findAll({
        where: { userId: id },
    });
}

const fetchPostById = ({ id }) => {
    return models.Post.findByPk(id)
}

const addPost = async ({ title, content, draft, userId }) => {

    return {
        success: true,
        message: 'Post Added',
        data: await models.Post.create({
            title, content, draft, userId
        })
    }
}

const updatePost = async (data) => {
    const id = data.id;
    delete data.id;

    if (!id) return {
        success: false,
        message: 'Id is missing'
    }

    await models.Post.update(data, { where: { id } })

    return {
        success: true,
        message: 'Post Updated',
        data
    }
}

const deletePost = async ({ id }) => {
    if (!id) return {
        success: false,
        message: 'Id is missing'
    }

    await models.Post.destroy({ where: { id } })
    return {
        success: true,
        message: 'Post Deleted',
    }
}

module.exports = {
    fetchPosts,
    fetchPostByUser,
    fetchPostById,
    addPost,
    updatePost,
    deletePost,
}