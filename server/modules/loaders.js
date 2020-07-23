const userLoader = require('./user/loader');
const postLoader = require('./post/loader');

module.exports = { userLoader: userLoader(), postLoader: postLoader() }