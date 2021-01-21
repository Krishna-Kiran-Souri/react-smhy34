import { useImageService } from "../../service/imageservice.js";
import React, { useState, useEffect, useRef } from "react";
import "./imagetile.css";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import CircularIndeterminate from "../../utl/components/circularspinner.jsx";
import Mason from "react-stone-mason";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    height: "100vh"
  },
  gridList: {
    position: "realtive",
    paddingTop: 10,
    overFlowY: "hidden",
    height: "100vh"
  }
}));

export const ImageTiles = props => {
  const classes = useStyles();
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);
  const fetchPhotos = async pageNumber => {
    const ACCESS_KEY = "1nzzDPNsXTV-rn7FHQbFXbPWdgECj5Mp5zG1K5_-gHY";
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=instagram&client_id=${ACCESS_KEY}&page=${pageNumber}&per_page=21`
    );
    const data = await res.json();

    // console.log(data);
    let temp = data.results.map((img, index) => {
      let row = 1;
      let col = 1;
      return { url: img.urls.small, col: col, row: row };
    });
    console.log(temp);
    setImages(p => [...p, ...temp]);
    setLoading(false);
  };
  const pageEnd = useRef();
  useEffect(() => {
    fetchPhotos(pageNumber);
  }, [pageNumber]);

  useEffect(() => {
    if (loading) {
      const observer = new IntersectionObserver(
        entries => {
          console.log(entries);
        },
        { threshold: 1 }
      );
      observer.observe(pageEnd.current);
    }
  }, [loading]);
  const loadMore = () => {
    setPageNumber(prevpagenumber => prevpagenumber + 1);
    setLoading(true);
  };
  const columnConfig = {
    small: {
      query: "(max-width: 720px)",
      columns: 2
    },
    medium: {
      query: "(min-width: calc(721px)) and (max-width: calc(1022px) )",
      columns: 3
    },
    large: {
      query: "(min-width: 1023px)",
      columns: 4
    }
  };
  // const imageTiles=

  return (
    // <h1 />
    // <h1>{images.map(tile=>tile)}</h1>
    <div className={classes.root + " imagegrid"}>
      <GridList
        className={classes.gridList + " grid-list"}
        cols={3}
        ref={pageEnd}
        onScroll={loadMore}
      >
        {images.map((tile, index) => (
          <GridListTile
            key={index}
            cols={tile.col || 1}
            rows={tile.row}
            spacing={1}
          >
            <img src={tile.url} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>

      {loading ? <CircularIndeterminate /> : <></>}
    </div>
  );
};
