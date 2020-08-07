import { gql } from "@apollo/client";

export default gql`
  mutation likePost($id: ID) {
    likePost(id: $id)
  }
`;
