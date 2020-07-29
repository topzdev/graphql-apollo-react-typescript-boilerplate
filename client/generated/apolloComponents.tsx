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
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  me?: Maybe<Result>;
  postsFeed?: Maybe<Array<Maybe<Post>>>;
  postsByUserId?: Maybe<Array<Maybe<Post>>>;
  postById?: Maybe<Post>;
  helloWorld?: Maybe<Scalars['String']>;
};


export type QueryPostsByUserIdArgs = {
  id: Scalars['String'];
};


export type QueryPostByIdArgs = {
  id: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<Result>;
  signUp?: Maybe<Result>;
  invalidateTokens: Scalars['Boolean'];
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


export type MutationAddPostArgs = {
  title: Scalars['String'];
  content: Scalars['String'];
  draft: Scalars['Boolean'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  draft?: Maybe<Scalars['Boolean']>;
};


export type MutationDeletePostArgs = {
  id: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  author?: Maybe<User>;
  like?: Maybe<Scalars['Int']>;
  draft?: Maybe<Scalars['Boolean']>;
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