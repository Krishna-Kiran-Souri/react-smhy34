import React, { useEffect, useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { TopNavbar } from "./topnavbar.jsx";
import { TopNavBarMobile } from "./topnavbarmobile.jsx";
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
export const Layout = () => {
  const isMobile = useMediaQuery("min-width:600px");
  const { height, width } = useWindowDimensions();

  return width < 600 ? <TopNavBarMobile /> : <TopNavbar />;
};
