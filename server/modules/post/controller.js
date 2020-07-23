const services = require("./services");

const postsFeed = async () => {
    try {
        return await services.fetchPosts
    } catch (error) {
        throw Error(error);
    }
}

const postsByUserId = async (data) => {
    try {
        return await services.fetchPostByUser(data)
    } catch (error) {
        throw Error(error);
    }
}

const postById = async (data) => {
    try {
        return await services.fetchPostById(data)
    } catch (error) {
        throw Error(error);
    }
}

const addPost = async (data) => {
    try {
        return await services.addPost(data);
    } catch (error) {
        throw Error(error);
    }
}

const updatePost = async (data) => {
    try {
        return await services.updatePost(data);
    } catch (error) {
        throw Error(error);
    }

}

const deletePost = async (data) => {
    try {
        return await services.deletePost(data);
    } catch (error) {
        throw Error(error)
    }
}


module.exports = { postsFeed, postsByUserId, postById, addPost, deletePost, updatePost }