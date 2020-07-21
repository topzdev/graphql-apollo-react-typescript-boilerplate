const { mergeResolvers } = require('@graphql-tools/merge')
const defaultResolver = require('./default/resolver');
const userResolver = require('./user/resolver')
const postResolver = require('./post/resolver')


const resolvers = [
    userResolver,
    postResolver,
    defaultResolver
]


module.exports = mergeResolvers(resolvers)