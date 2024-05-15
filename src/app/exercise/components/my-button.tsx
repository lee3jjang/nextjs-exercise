"use client";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function MyButton() {
  const [open, setOpen] = useState(false);

  return (
    <Card variant="outlined">
      <CardHeader title="제목" />
      <CardContent>
        <Typography color="text.secondary">{open ? "열림" : "닫힘"}</Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ width: "100%" }}
          variant="outlined"
          size="small"
          onClick={() => setOpen((open) => !open)}
        >
          클릭
        </Button>
      </CardActions>
    </Card>
  );
}
