const { gql } = require('apollo-server')

const postType = gql`
    type Post {
        id: String
        title: String
        content:String
        author: User 
        like: Int
        draft: Boolean
    }

    type Query {
        postsFeed: [Post],
        postsByUserId(id: String!): [Post],
        postById(id: String!): Post
    }

    type Mutation {
        addPost(title: String!, content: String!, draft: Boolean!): Result
        updatePost(id: String!, title: String!, content: String!, draft: Boolean!): Result
        deletePost(id: String!): Result
    }
`
module.exports = postType;