const { gql } = require('apollo-server')

const postType = gql`
    type Post {
        id: String
        title: String
        content:String
        author: Author
        like: Int
        draft: Boolean
    }

    extend type Query {
        postsByUserID(id: String!): [Post],
        postById(id: String!): Post
    }

    extend type Mutations {
        addPost(title: String!, content: String!, draft: Boolean!): Result
        updatePost(id: String!, title: String!, content: String!, draft: Boolean!): Result
        deletePost(id: String!): Result
    }
`
module.exports = postType;