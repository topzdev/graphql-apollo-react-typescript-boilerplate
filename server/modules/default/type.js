const { gql } = require('apollo-server');


const defaultType = gql`
    union DataResult = Post | User

    type Result {
        success: Boolean
        message: String
        data: DataResult
        token: String
    }

    type Query {
        helloWorld: String
    }
`

module.exports = defaultType