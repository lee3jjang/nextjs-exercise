"use client";

import { posts } from "@/app/data/data";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Post } from "@/app/data/types";
import { z } from "zod";
import MDEditor from "@uiw/react-md-editor";

const ZPost = z.object({
  title: z.string(),
  content: z.string(),
});

type Props = {
  params: { postId: string };
};

export default function PostEdit({ params: { postId } }: Props) {
  const post: Post = posts.filter((post) => String(post.id) === postId)[0];
  if (!post) throw Error("Unreachable");
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  return (
    <>
      <Typography variant="h5">포스트 수정</Typography>
      <form action={action}>
        <TextField
          value={title}
          onChange={({ target: { value } }) => setTitle(value)}
          placeholder="제목을 입력하세요."
        />
        <input
          name="content"
          type="text"
          placeholder="test"
          hidden
          value={content}
        />
        <MDEditor
          value={content}
          onChange={(value) => setContent(value ?? "")}
          textareaProps={{
            placeholder: "내용을 입력하세요.",
          }}
        />
        <Button type="submit" variant="contained">
          확정
        </Button>
      </form>
    </>
  );

  function action(formData: FormData) {
    console.log(formData.get("content"));
    const parsedPost = ZPost.parse({ title, content });
    console.log(parsedPost);
  }
}
