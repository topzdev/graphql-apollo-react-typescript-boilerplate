const { mergeTypeDefs } = require('@graphql-tools/merge')

const userType = require('./user/type');
const postType = require('./post/type');
const defaultType = require('./default/type');

const types = [
    userType,
    postType,
    defaultType,
]

module.exports = mergeTypeDefs(types, { all: true })


