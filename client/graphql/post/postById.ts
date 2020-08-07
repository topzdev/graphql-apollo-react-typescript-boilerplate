import { gql } from "@apollo/client";

export const createPostMutation = gql`
  query PostById($id: ID!) {
    postById(id: $id) {
      id
      title
      content
      author {
        id
        username
      }
      likes
      draft
    }
  }
`;
