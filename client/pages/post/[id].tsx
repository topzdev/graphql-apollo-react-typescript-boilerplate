import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import {
  useLikePostMutation,
  usePostByIdLazyQuery,
} from "../../generated/apolloComponents";

export default function PostByIDPage() {
  const router = useRouter();
  const { id } = router.query as any;
  const [likes, setLikes] = useState(0);
  const [getPostById, { loading, error, data }] = usePostByIdLazyQuery();
  const [likePost, likePostOpt] = useLikePostMutation();

  useEffect(() => {
    if (!id) return;
    getPostById({ variables: { id } });
  }, [id]);

  useEffect(() => {
    if (!data || !data.postById.likes) return;
    setLikes(data.postById.likes);
  }, [data?.postById.likes]);

  useEffect(() => {
    if (likePostOpt.data?.likePost) setLikes(likes + 1);
  }, [likePostOpt.data?.likePost]);

  const onLikePost = () => {
    likePost({ variables: { id } });
  };

  if (loading || !data) return <div>Loading...</div>;
  if (error) return <div>Error occured</div>;

  return (
    <div>
      <Head>
        <title> {data.postById.title} </title>
      </Head>
      <div>
        <label>Title: {data.postById?.title}</label>
      </div>
      <div>
        <label>Content: {data.postById?.content}</label>
      </div>
      <div>
        <label>{data.postById?.draft ? "currently as draft" : ""}</label>
      </div>
      <div>
        <label>Like: {likes}</label>{" "}
        <button onClick={onLikePost}>Like this post</button>
      </div>
    </div>
  );
}
