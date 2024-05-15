"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
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
import SportsHandballIcon from "@mui/icons-material/SportsHandball";
import PersonIcon from "@mui/icons-material/Person";

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
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    router.push("/person/create");
                    setOpen(false);
                  }}
                >
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="사람" />
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton
                  onClick={() => {
                    router.push("/exercise");
                    setOpen(false);
                  }}
                >
                  <ListItemIcon>
                    <SportsHandballIcon />
                  </ListItemIcon>
                  <ListItemText primary="연습" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box style={{ padding: "40px 50px" }}>{children}</Box>
        <footer
          style={{
            position: "absolute",
            width: "100%",
            bottom: 0,
          }}
        >
          <BottomNavigation showLabels style={{ backgroundColor: "#6a5acd" }}>
            <BottomNavigationAction
              href="/"
              style={{ color: "#ddd" }}
              label="홈"
              icon={<HomeIcon />}
            />
            <BottomNavigationAction
              href="/person/create"
              style={{ color: "#ddd" }}
              label="사람"
              icon={<PersonIcon />}
            />
          </BottomNavigation>
        </footer>
      </body>
    </html>
  );

  function toggleDrawer() {
    setOpen((open) => !open);
  }
}
