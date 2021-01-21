import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import AppBar from "@material-ui/core/AppBar";
import InsertCommentSharpIcon from "@material-ui/icons/InsertCommentSharp";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "row",
    background: "white",
    justifyContent: "space-evenly",
    alignItems: "space-evenly"
  },
  camera: {
    flex: 3
  },

  titleTypograph: {
    fontFamily: "Brush Script MT, Brush Script Std, cursive",
    fontColor: "black",
    color: "black",
    flex: 4
  },
  messages: {
    flex: 1
  }
}));
export const TopNavBarMobile = () => {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.root}>
        <div className={classes.camera}>
          <IconButton>
            <CameraAltIcon />
          </IconButton>
        </div>

        <Typography className={classes.titleTypograph}>
          Instagram Clone
        </Typography>

        <div className={classes.messages}>
          <IconButton>
            <InsertCommentSharpIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
