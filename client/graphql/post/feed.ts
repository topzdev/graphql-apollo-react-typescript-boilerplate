import { gql } from "@apollo/client";

export const postFeed = gql`
  query postsFeed {
    postsFeed {
      id
      title
      author {
        username
        id
      }
      content
      createdAt
      likes
      draft
    }
  }
`;
