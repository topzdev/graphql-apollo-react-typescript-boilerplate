const { gql } = require('apollo-server-express')

const userType = gql`

    type User {
        id: String,
        username: String
    }

    type Query {
        me: Result
    }


    type Mutation {
        login(username: String!, password: String!): Result
        signUp(username: String!, password: String!): Result
    }
`

module.exports = userType;