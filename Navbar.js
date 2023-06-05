import React from "react";
import Box from "@mui/material/Box";
import "@fontsource/quicksand";
import Drawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkIcon from "@mui/icons-material/Link";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import ListItemButton from "@mui/material/ListItemButton";
import AppBar from "@mui/material/AppBar";
import { ButtonGroup } from "@mui/material";
import Socials from "./Socials";
import { Anchor } from "antd";
import { Link as Linked } from "@mui/material";
const { Link } = Anchor;

const drawerWidth = 240;

const pages = [
  <div
    className="Navbar"
    style={{
      position: "absolute",
      right: "230px",
      top: "45px",
      fontFamily: "helvetica",
      maxWidth: "450px",
      display: "block",
    }}
  >
    <Anchor targetOffset="120">
      <Link href="#" title="Home"></Link>
      <Link href="#videoPlayer" title="Video Player"></Link>
      <Link href="#bio" title="Bio"></Link>
      <Link href="#contact" title="Contact"></Link>
      <Link href="#" title="More"></Link>
    </Anchor>
  </div>,
];

function ResponsiveDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div
      className="drawer"
      style={{ color: "white", backgroundColor: "rgb(22, 22, 22)" }}
    >
      <Toolbar />

      <List className="sideList">
        <Anchor id="side" targetOffset="120">
          <ListItem button disablePadding>
            <ListItemButton style={{ paddingLeft: "80px" }}>
              <Link href="#" title="Home" ></Link>
            </ListItemButton>
          </ListItem>

          <ListItem button disablePadding>
            <ListItemButton style={{ paddingLeft: "60px" }}>
              <Link href="#videoPlayer" title="Video Player"></Link>
            </ListItemButton>
          </ListItem>

          <ListItem button disablePadding>
            <ListItemButton style={{ paddingLeft: "90px" }}>
              <Link href="#bio" title="Bio"></Link>
            </ListItemButton>
          </ListItem>
          <ListItem button disablePadding>
            <ListItemButton style={{ paddingLeft: "70px" }}>
              <Link href="#contact" title="Contact"></Link>
            </ListItemButton>
          </ListItem>

          <ListItem button disablePadding>
            <ListItemButton style={{ paddingLeft: "80px" }}>
              <Link href="#" title="More"></Link>
            </ListItemButton>
          </ListItem>
        </Anchor>

        <ListItem>
          <Linked
            href="https://www.facebook.com/Mookieandthebab"
            target="_blank"
            underline="none"
            color="white"
            marginLeft="30px"
          >
            <FacebookIcon />
          </Linked>
          <Linked
            href="https://www.instagram.com/mookieandthebab/?hl=en"
            target="_blank"
            underline="none"
            color="white"
            marginLeft="10px"
          >
            <InstagramIcon />
          </Linked>
          <Linked
            href="https://twitter.com/mookieandthebab"
            target="_blank"
            underline="none"
            color="white"
            marginLeft="10px"
          >
            <TwitterIcon />
          </Linked>
          <Linked
            href="https://www.youtube.com/channel/UCNxmoc-4H4PhzTJwpvLLLUA"
            target="_blank"
            underline="none"
            color="white"
            marginLeft="10px"
          >
            <YouTubeIcon />
          </Linked>
          <Linked
            href="https://linktr.ee/Mookieandthebab"
            target="_blank"
            underline="none"
            color="white"
            marginLeft="10px"
          >
            <LinkIcon />
          </Linked>
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    return (
      <AppBar elevation={0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {pages.map((page) => (
              <Button
                className="btn"
                variant="h1"
                key={page}
                sx={{ my: 2, display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Toolbar>
        </Container>
      </AppBar>
    );
  };

  return (
    <Box display="flex" flexGrow={1}>
      <AppBar
        style={{ backgroundColor: "rgb(22, 22, 22)" }}
        elevation={0}
        sx={{ height: "100px" }}
      >
        <Toolbar>
          <Socials />
          <Box display="inline">
            <Linked
              href="#"
              className="MBtitle"
              underline="none"
              style={{ color: "white" }}
            >
              <Typography
                display="left"
                position="absolute"
                top="15px"
                left="25px"
                style={{ fontFamily: "quicksand" }}
              >
                <h2>MOOKIE AND THE BAB</h2>
              </Typography>
            </Linked>
          </Box>

          {pages.map((page) => (
            <Box
              className="box"
              variant="h1"
              key={page}
              sx={{
                my: 2,
                display: "block",
                display: { xs: "none", md: "flex", sm: "none" },
              }}
            >
              {page}
            </Box>
          ))}
        </Toolbar>
        <IconButton
          aria-label="open-drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "flex", md: "none" } }}
        >
          <MenuIcon
            style={{
              fontSize: "30px",
              color: "white",
              position: "absolute",
              right: "10px",
              top: "-17px",
            }}
          />
        </IconButton>
      </AppBar>

      {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default ResponsiveDrawer;
