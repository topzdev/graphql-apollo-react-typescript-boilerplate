const { gql } = require('apollo-server')

const userType = gql`

    type User {
        id: String,
        username: String
    }

    type Mutation {
        login(username: String!, password: String!): Result
        signUp(username: String!, password: String!): Result
    }
`

module.exports = userType;