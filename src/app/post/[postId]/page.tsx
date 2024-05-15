"use client";

import { posts } from "@/app/data/data";
import { Box, Button, Typography } from "@mui/material";
import MDEditor from "@uiw/react-md-editor";

type Props = {
  params: { postId: string };
};

export default async function PostDetail({ params: { postId } }: Props) {
  const post = posts.filter((post) => String(post.id) === postId)[0];
  if (!post) throw Error("Unreachable");

  return (
    <Box style={{ padding: "40px 50px" }}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        marginBottom={3}
      >
        <Typography variant="h5">포스트 상세</Typography>
        <Button href={`/post/${postId}/edit`} variant="contained">
          수정
        </Button>
      </Box>
      <Typography variant="subtitle1">{post.title}</Typography>
      <MDEditor.Markdown
        source={post.content}
        style={{ whiteSpace: "pre-wrap" }}
      />
    </Box>
  );
}
