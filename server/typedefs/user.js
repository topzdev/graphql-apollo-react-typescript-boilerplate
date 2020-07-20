const { gql } = require('apollo-server')

const userType = gql`

    type User {
        id: String,
        username: String
    }

    extend type Mutations {
        login(username: String, password: String): String
        signUp(username: String, password: String): String
    }
`