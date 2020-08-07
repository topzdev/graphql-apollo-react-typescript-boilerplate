import React from "react";
import { usePostsFeedQuery } from "../../generated/apolloComponents";
import List from "../../components/List";

export default function FeedPage() {
  const { data, loading, error } = usePostsFeedQuery();

  if (!data || loading) return <div>Loading posts...</div>;

  return <List items={data.postsFeed} />;
}
