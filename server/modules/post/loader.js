const DataLoader = require('dataloader');
const models = require('../models');
const { Op } = require('sequelize');

const postsBatch = async (ids) => {
    const posts = await models.Post.findAll({
        where: {
            id: {
                [Op.in]: [ids]
            }
        }
    })

    const postsMap = {};

    posts.forEach(post => postsMap[post.id] = post);

    return ids.map(id => postsMap[id]);
}

module.exports = () => new DataLoader(postsBatch)
