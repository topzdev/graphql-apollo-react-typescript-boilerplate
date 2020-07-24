const { ApolloServer } = require('apollo-server-express');
const db = require('./modules/models')
const typeDefs = require('./modules/types');
const resolvers = require('./modules/resolvers');
const loaders = require('./modules/loaders');
const express = require('express');
const cookieParser = require('cookie-parser');
const decodedToken = require('./modules/shared/decodedToken');


const startServer = () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => (
      {
        res,
        req,
        db,
        loaders,
      }
    )
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

  const app = express();

  app.use(cookieParser())

  app.use(decodedToken);

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  })
}


startServer();

