import React from "react";
import "./style.css";
import { Layout } from "./layout";
import { ImageTiles } from "./pages/infinitescroll/imagetile.jsx";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles(theme => ({
  feed: {
    paddingTop: 20,
    marginTop: 20,
    width: "100vw",
    height: "100vh",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row"
  }
}));
export default function App() {
  const classes = useStyles();
  return (
    <div>
      <Layout />
      <div className={classes.feed}>
        <ImageTiles />
      </div>
    </div>
  );
}
