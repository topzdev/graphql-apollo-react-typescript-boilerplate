import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<Result>;
  postsFeed: Array<Post>;
  postsByUserId: Array<Maybe<Post>>;
  postById: Post;
  helloWorld?: Maybe<Scalars['String']>;
};


export type QueryPostsByUserIdArgs = {
  id: Scalars['ID'];
};


export type QueryPostByIdArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<Result>;
  signUp?: Maybe<Result>;
  invalidateTokens: Scalars['Boolean'];
  likePost?: Maybe<Scalars['Boolean']>;
  addPost?: Maybe<Result>;
  updatePost?: Maybe<Result>;
  deletePost?: Maybe<Result>;
};


export type MutationLoginArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSignUpArgs = {
  username: Scalars['String'];
  password: Scalars['String'];
};


export type MutationLikePostArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type MutationAddPostArgs = {
  title: Scalars['String'];
  content: Scalars['String'];
  draft: Scalars['Boolean'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  draft?: Maybe<Scalars['Boolean']>;
};


export type MutationDeletePostArgs = {
  id: Scalars['ID'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  author?: Maybe<User>;
  likes?: Maybe<Scalars['Int']>;
  draft?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};


export type DataResult = Post | User;

export type Result = {
  __typename?: 'Result';
  success?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  data?: Maybe<DataResult>;
  token?: Maybe<Scalars['String']>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type CreatePostMutationVariables = Exact<{
  title: Scalars['String'];
  content: Scalars['String'];
  draft: Scalars['Boolean'];
}>;


export type CreatePostMutation = (
  { __typename?: 'Mutation' }
  & { addPost?: Maybe<(
    { __typename?: 'Result' }
    & Pick<Result, 'success' | 'message'>
    & { data?: Maybe<(
      { __typename?: 'Post' }
      & Pick<Post, 'id'>
    ) | { __typename?: 'User' }> }
  )> }
);

export type PostsFeedQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsFeedQuery = (
  { __typename?: 'Query' }
  & { postsFeed: Array<(
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'createdAt' | 'likes' | 'draft'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'id'>
    )> }
  )> }
);

export type LikePostMutationVariables = Exact<{
  id?: Maybe<Scalars['ID']>;
}>;


export type LikePostMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'likePost'>
);

export type PostByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type PostByIdQuery = (
  { __typename?: 'Query' }
  & { postById: (
    { __typename?: 'Post' }
    & Pick<Post, 'id' | 'title' | 'content' | 'likes' | 'draft'>
    & { author?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )> }
  ) }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'Result' }
    & Pick<Result, 'success' | 'message'>
    & { data?: Maybe<{ __typename?: 'Post' } | (
      { __typename?: 'User' }
      & Pick<User, 'id'>
    )> }
  )> }
);


export const CreatePostDocument = gql`
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
export type CreatePostMutationFn = ApolloReactCommon.MutationFunction<CreatePostMutation, CreatePostMutationVariables>;

/**
 * __useCreatePostMutation__
 *
 * To run a mutation, you first call `useCreatePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPostMutation, { data, loading, error }] = useCreatePostMutation({
 *   variables: {
 *      title: // value for 'title'
 *      content: // value for 'content'
 *      draft: // value for 'draft'
 *   },
 * });
 */
export function useCreatePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
        return ApolloReactHooks.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
      }
export type CreatePostMutationHookResult = ReturnType<typeof useCreatePostMutation>;
export type CreatePostMutationResult = ApolloReactCommon.MutationResult<CreatePostMutation>;
export type CreatePostMutationOptions = ApolloReactCommon.BaseMutationOptions<CreatePostMutation, CreatePostMutationVariables>;
export const PostsFeedDocument = gql`
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

/**
 * __usePostsFeedQuery__
 *
 * To run a query within a React component, call `usePostsFeedQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsFeedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsFeedQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsFeedQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostsFeedQuery, PostsFeedQueryVariables>) {
        return ApolloReactHooks.useQuery<PostsFeedQuery, PostsFeedQueryVariables>(PostsFeedDocument, baseOptions);
      }
export function usePostsFeedLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostsFeedQuery, PostsFeedQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostsFeedQuery, PostsFeedQueryVariables>(PostsFeedDocument, baseOptions);
        }
export type PostsFeedQueryHookResult = ReturnType<typeof usePostsFeedQuery>;
export type PostsFeedLazyQueryHookResult = ReturnType<typeof usePostsFeedLazyQuery>;
export type PostsFeedQueryResult = ApolloReactCommon.QueryResult<PostsFeedQuery, PostsFeedQueryVariables>;
export const LikePostDocument = gql`
    mutation likePost($id: ID) {
  likePost(id: $id)
}
    `;
export type LikePostMutationFn = ApolloReactCommon.MutationFunction<LikePostMutation, LikePostMutationVariables>;

/**
 * __useLikePostMutation__
 *
 * To run a mutation, you first call `useLikePostMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikePostMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likePostMutation, { data, loading, error }] = useLikePostMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useLikePostMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LikePostMutation, LikePostMutationVariables>) {
        return ApolloReactHooks.useMutation<LikePostMutation, LikePostMutationVariables>(LikePostDocument, baseOptions);
      }
export type LikePostMutationHookResult = ReturnType<typeof useLikePostMutation>;
export type LikePostMutationResult = ApolloReactCommon.MutationResult<LikePostMutation>;
export type LikePostMutationOptions = ApolloReactCommon.BaseMutationOptions<LikePostMutation, LikePostMutationVariables>;
export const PostByIdDocument = gql`
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

/**
 * __usePostByIdQuery__
 *
 * To run a query within a React component, call `usePostByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function usePostByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<PostByIdQuery, PostByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, baseOptions);
      }
export function usePostByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<PostByIdQuery, PostByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<PostByIdQuery, PostByIdQueryVariables>(PostByIdDocument, baseOptions);
        }
export type PostByIdQueryHookResult = ReturnType<typeof usePostByIdQuery>;
export type PostByIdLazyQueryHookResult = ReturnType<typeof usePostByIdLazyQuery>;
export type PostByIdQueryResult = ApolloReactCommon.QueryResult<PostByIdQuery, PostByIdQueryVariables>;
export const LoginDocument = gql`
    mutation Login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    success
    message
    data {
      ... on User {
        id
      }
    }
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;