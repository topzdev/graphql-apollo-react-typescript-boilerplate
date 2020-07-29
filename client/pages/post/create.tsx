import React, { useState, FormEvent } from "react";
import { useCreatePostMutation } from "../../generated/apolloComponents";
import Layout from "../../components/Layout";

export default function create() {
  const [state, setstate] = useState({
    title: "",
    content: "",
    draft: true,
  });

  const [setCreatePost, { data, loading, error }] = useCreatePostMutation();

  const onSubmit = (e: any) => {
    e.preventDefault();

    setCreatePost({ variables: state });
  };

  const onChange = (e: any) =>
    setstate({
      ...state,
      [e.target.name]:
        e.target.type === "text" ? e.target.value : e.target.checked,
    });

  return (
    <Layout title="Create Post | Postum">
      <form noValidate onSubmit={onSubmit}>
        <h1>Post Create</h1>
        <div>
          <label>
            Title:
            <input
              type="text"
              placeholder="Title"
              name="title"
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            Content:
            <input
              type="text"
              placeholder="Content"
              name="content"
              onChange={onChange}
            />
          </label>
        </div>
        <div>
          <label>
            Draft:
            <input type="checkbox" name="draft" onChange={onChange} />
          </label>
        </div>
        <div>
          <button type="submit">{loading ? "Loading..." : "Post!"}</button>
        </div>
      </form>
    </Layout>
  );
}
