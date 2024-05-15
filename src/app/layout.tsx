"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import {
  AppBar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import BorderColorIcon from "@mui/icons-material/BorderColor";

import { useState } from "react";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <html lang="ko">
      <body className={inter.className}>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <IconButton
              color="inherit"
              size="large"
              sx={{ mr: 2 }}
              edge="start"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6">블로그</Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={open} onClose={() => setOpen(false)}>
          <Box sx={{ width: 250 }}>
            <List>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    router.push("/");
                    setOpen(false);
                  }}
                >
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="홈" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    router.push("/post");
                    setOpen(false);
                  }}
                >
                  <ListItemIcon>
                    <BorderColorIcon />
                  </ListItemIcon>
                  <ListItemText primary="포스트" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        {children}
      </body>
    </html>
  );

  function toggleDrawer() {
    setOpen((open) => !open);
  }
}
