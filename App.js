import react from "react";
import "./App.css";
import "@fontsource/quicksand";
import Contact from "./components/Contact";
import ResponsiveAppBar from "../src/components/Navbar";
import Title from "./components/Title";
import Media from "./components/Media/Youtube";
import Spotify from "./components/Media/Spotify";
import Bio from "./components/Bio";
import Socials from "./components/Socials";
import {
  ThemeProvider,
  createTheme,
  styled,
  responsiveFontSizes,
} from "@mui/material/styles";

function App() {
  return (
    <div
      className="App"
      style={{ fontFamily: "quicksand", overflow: "hidden" }}
    >
      <div className="navbar">
        <ResponsiveAppBar />
      </div>
      <Title />

      <body className="mainBody">
        <Media />
        <h1 style={{ fontFamily: "quicksand",  textAlign: "center",
              fontSize: "50px",
              marginBottom: "80px", marginTop:"130px"}}>TRACK LIST</h1>
        <Spotify />
        <Bio />
        <Contact />
      </body>
    </div>
  );
}

export default App;
