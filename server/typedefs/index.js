const root = require('./root');
const postType = require('./post');
const userType = require('./user');
const defaultType = require('./default');

const schemaArray = [root, postType, userType, defaultType];

module.exports = schemaArray