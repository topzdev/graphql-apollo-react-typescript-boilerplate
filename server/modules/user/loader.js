const DataLoader = require('dataloader');
const models = require('../models');
const Op = require('sequelize').Op;

const usersBatch = async (ids) => {

    const users = await models.User.findAll({
        where: {
            id: {
                [Op.in]: ids
            }
        }
    });

    const userMap = {}

    users.forEach(user => {
        userMap[user.id] = user;
    })

    return ids.map(id => userMap[id])
}

module.exports = () => new DataLoader(usersBatch)