const { ApolloServer, gql } = require('apollo-server');
const models = require('./models')
models.sequelize.authenticate().then(() => console.log('Database Connected')).catch(error => console.log('Database Error', error))


const typeDefs = gql`
  type Category {
    id: ID
    title: String
    description: String
    product: [Product]
  }

  type Product{
    id: ID
    title: String
    description: String
    price: Float 
    category: Category
  }

  type Query {
    product(id: ID): Product
    products: [Product]
    categories: [Category]
    category: Category
  }

  input AddProductInput {
    "the name of the product"
    title: String
    "describe the product"
    description: String
    "price of the product"
    price: Float
    "choose category of the product"
    category: Int
  }

  type Mutation {
      addProduct(product: AddProductInput): Product
  }
`;

const resolvers = {
    Query: {
        products: () => products,
        product: () => {

        },
        categories: () => category
    }
}

const server = new ApolloServer({ typeDefs, resolvers });


server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})