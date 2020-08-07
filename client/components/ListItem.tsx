import React from "react";
import Link from "next/link";
import { Post } from "../generated/apolloComponents";
import dayjs from "dayjs";

type Props = {
  data: Post;
};

const ListItem = ({ data }: Props) => (
  <div style={{ marginTop: 20 }}>
    <Link href="/post/[id]" as={`/post/${data.id}`}>
      <a>{data.title}</a>
    </Link>

    <p>{data.content}</p>

    <small>
      Posted at: {dayjs(data.createdAt).format("MMMM DD, YYYY DD hh:mm a")}
    </small>

    <div>
      <Link href="/user/[id]" as={`/user/${data.author?.id}`}>
        <a>{data.author?.username}</a>
      </Link>
    </div>
  </div>
);

export default ListItem;
