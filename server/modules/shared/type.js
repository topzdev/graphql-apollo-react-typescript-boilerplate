const { gql } = require("apollo-server-express");

const defaultType = gql`
  scalar DateTime

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
`;

module.exports = defaultType;
