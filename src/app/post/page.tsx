import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { posts } from "../data/data";

export default async function Post() {
  const postList = posts;

  return (
    <Box style={{ padding: "40px 50px" }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h5">포스트</Typography>
        <Button href="/post/create" variant="contained">
          새 포스트
        </Button>
      </Box>
      <List>
        {postList.map((post) => (
          <>
            <ListItem key={post.id}>
              <ListItemButton href={`/post/${post.id}`}>
                <ListItemText primary={post.title} secondary={post.content} />
              </ListItemButton>
            </ListItem>
            <Divider variant="middle" />
          </>
        ))}
      </List>
    </Box>
  );
}
