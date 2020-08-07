const { gql } = require("apollo-server-express");

const postType = gql`
  type Post {
    id: ID!
    title: String
    content: String
    author: User
    likes: Int
    draft: Boolean
    createdAt: DateTime
    updatedAt: DateTime
  }

  type Query {
    postsFeed: [Post!]!
    postsByUserId(id: ID!): [Post]!
    postById(id: ID!): Post!
  }

  type Mutation {
    likePost(id: ID): Boolean
    addPost(title: String!, content: String!, draft: Boolean!): Result
    updatePost(id: ID!, title: String, content: String, draft: Boolean): Result
    deletePost(id: ID!): Result
  }
`;
module.exports = postType;
