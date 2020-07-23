const { ApolloServer } = require('apollo-server');
const db = require('./modules/models')
const typeDefs = require('./modules/types');
const resolvers = require('./modules/resolvers');
const controllers = require('./modules/controllers');
const loaders = require('./modules/loaders');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {


    //authentication here


    return {
      db: controllers,
      loaders
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