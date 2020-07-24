const { ApolloServer, makeExecutableSchema } = require('apollo-server');
const db = require('./modules/models')
const typeDefs = require('./modules/types');
const resolvers = require('./modules/resolvers');
const controllers = require('./modules/controllers');
const loaders = require('./modules/loaders');
const decodedToken = require('./modules/shared/decodedToken');
const { applyMiddleware } = require('graphql-middleware');
const { permissions } = require('./modules/shared/authentication');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

const middleware = [permissions];

const schemaWithMiddleware = applyMiddleware(schema, ...middleware);

const server = new ApolloServer({
  schema: schemaWithMiddleware,

  context: ({ req }) => {
    return {
      db: controllers,
      loaders,
      user: decodedToken(req)
    }
  }
});


(async function () {
  try {
    // await db.sequelize.drop()
    // await db.sequelize.sync()
    await db.sequelize.authenticate()
    console.log('Database Connected')
  } catch (error) {
    console.log('Database Error', error)
  }
})();

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})