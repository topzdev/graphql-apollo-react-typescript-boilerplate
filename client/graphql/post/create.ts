import { gql } from "@apollo/client";

export const createPostMutation = gql`
  mutation CreatePost($title: String!, $content: String!, $draft: Boolean!) {
    addPost(title: $title, content: $content, draft: $draft) {
      success
      message
      data {
        ... on Post {
          id
        }
      }
    }
  }
`;
