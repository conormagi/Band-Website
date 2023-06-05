import react from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkIcon from "@mui/icons-material/Link";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Socials() {
  return (
    <Box
      className="socials"
      style={{
        position: "absolute",
        top: "25px",
        right: "0px",
      }}
      sx={{
        my: 2,
        display: "block",
        display: { xs: "none", md: "flex", sm: "none" },
      }}
    >
      <Link
        href="https://www.facebook.com/Mookieandthebab"
        target="_blank"
        color="white"
        underline="none"
      >
        <FacebookIcon />
      </Link>
      <Link
        href="https://www.instagram.com/mookieandthebab/?hl=en"
        target="_blank"
        color="white"
        underline="none"
        style={{ marginLeft: "20px" }}
      >
        <InstagramIcon />
      </Link>
      <Link
        href="https://twitter.com/mookieandthebab"
        target="_blank"
        color="white"
        underline="none"
        style={{ marginLeft: "20px" }}
      >
        <TwitterIcon />
      </Link>
      <Link
        href="https://www.youtube.com/channel/UCNxmoc-4H4PhzTJwpvLLLUA"
        target="_blank"
        color="white"
        underline="none"
        style={{ marginLeft: "20px" }}
      >
        <YouTubeIcon />
      </Link>
      <Link
        href="https://linktr.ee/Mookieandthebab"
        target="_blank"
        color="white"
        underline="none"
        style={{ marginLeft: "20px" }}
      >
        <LinkIcon />
      </Link>
    </Box>
  );
}
export default Socials;
