const { ApolloServer } = require('apollo-server');
const models = require('./models')
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers
});

models.sequelize.authenticate().then(() => console.log('Database Connected')).catch(error => console.log('Database Error', error))

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})