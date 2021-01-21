import React from "react";
import { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import HomeIcon from "@material-ui/icons/Home";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

import { fade, makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import InsertCommentSharpIcon from "@material-ui/icons/InsertCommentSharp";
import ExploreIcon from "@material-ui/icons/Explore";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles(theme => ({
  appbar: {
    color: "white",
    background: "white",
    display: "flex",
    flexDirection: "row",

    justifyContent: "space-evenly"
  },
  grow: {
    flexGrow: 1
  },

  menu: {},
  searchicon: {
    border: "1px solid"
  },
  title: {
    color: "black",
    alignItems: "flex-start",
    flex: 1
  },
  titleTypograph: {
    fontFamily: "Brush Script MT, Brush Script Std, cursive"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.grey[500], 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.grey[500], 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    flex: 1,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  },
  menu: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly"
  }
}));
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export const TopNavbar = () => {
  const classes = useStyles();
  const { height, width } = useWindowDimensions();
  // console.log(height, width);
  return (
    <AppBar position="sticky">
      <Toolbar className={classes.appbar}>
        <div className={classes.title}>
          <Typography className={classes.titleTypograph} variant="h6" noWrap>
            Instagram Clone
          </Typography>
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.menu}>
          <IconButton>
            <HomeIcon />
          </IconButton>
          <IconButton>
            <ExploreIcon />
          </IconButton>
          <IconButton>
            <InsertCommentSharpIcon />
          </IconButton>
          <IconButton>
            <FavoriteBorderIcon />
          </IconButton>
          <Avatar src="https://images.unsplash.com/photo-1570264013623-796051486fc6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max" />
        </div>
      </Toolbar>
    </AppBar>
  );
};
