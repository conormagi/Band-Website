import react from "react";
import image from "../components/m&b.jpeg";
import "@fontsource/quicksand";
import { height, maxWidth } from "@mui/system";

function Title() {
  return (
    <section>
      <div className="container" position="relative">
        <img
          className="img"
          style={{
            opacity: "0.8",
            marginTop: "100px",
            position: "relative",
          }}
          src={image}
        ></img>

        <div
          className="imageText"
          style={{
            color: "white",
          }}
        >
          <h1
            className="title1"
            style={{ fontSize: "6vw", marginBottom: "0px" }}
          >
            NEW SINGLE
          </h1>
          <h2 style={{ fontSize: "3vw" }}>PASSING THROUGH</h2>
          <h2 style={{ fontSize: "3vw" }}>OUT NOW</h2>
        </div>
      </div>
    </section>
  );
}

export default Title;
