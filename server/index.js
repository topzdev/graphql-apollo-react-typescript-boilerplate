const { ApolloServer, gql } = require('apollo-server');
const { Sequelize, DataTypes, Deferrable } = require('sequelize')

const sequelize = new Sequelize('crud-graphql', 'postgres', 'dev123', {
    host: 'localhost',
    dialect: 'postgres'
})

const Category = sequelize.define('Category', {

    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false
})

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING
    },
    price: {
        type: DataTypes.FLOAT
    },
    category: {
        type: DataTypes.UUID,
        references: {
            model: Category,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
}, {
    timestamps: false
})

// Category.sync({ force: true })
// Product.sync({ force: true })
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
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

sequelize.authenticate().then(() => console.log('Database Connected')).catch(error => console.log('Database Error', error))

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
})