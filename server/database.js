
const { Sequelize } = require('sequelize')

module.exports = new Sequelize(
    'crud-graphql',
    'postgrest',
    'dev123',
    {
        host: 'localhost',
        dialect: 'postgres'
    }
)