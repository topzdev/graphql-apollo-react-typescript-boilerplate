const { ApolloServer } = require("apollo-server-express");
const db = require("./modules/models");
const express = require("express");
const cookieParser = require("cookie-parser");
const typeDefs = require("./modules/types");
const resolvers = require("./modules/resolvers");
const loaders = require("./modules/loaders");
const { decodeToken } = require("./utils/auth");
const { PORT } = require("./constants");
const cors = require("cors");

const startServer = () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }) => ({ req, res, db, loaders }),
  });

  db.sequelize.authenticate().then((e) => console.log("Database Connected"));

  const app = express();

  const corsOption = {
    origin: "http://localhost:3000",
    credentials: true,
  };

  app.use(cookieParser());

  app.use(decodeToken);

  server.applyMiddleware({ app, cors: corsOption }); // app is from an existing express app

  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
    )
  );
};

startServer();
