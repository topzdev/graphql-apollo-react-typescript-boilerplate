
const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
    'crud-graphql',
    'postgres',
    'dev123',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)