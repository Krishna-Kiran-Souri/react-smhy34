import { useState, useEffect } from "react";

export const useImageService = pagenumber => {
  const [images, setImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(pagenumber);

  const fetchPhotos = async pageNumber => {
    const ACCESS_KEY = "1nzzDPNsXTV-rn7FHQbFXbPWdgECj5Mp5zG1K5_-gHY";
    const res = await fetch(
      `https://api.unsplash.com/search/photos?query=instagram&client_id=${ACCESS_KEY}&page=${pageNumber}&per_page=10`
    );
    const data = await res.json();
    // console.log(data);
    setImages(prevImages => ({
      ...prevImages,
      ...data
    }));
  };
  useEffect(() => {
    fetchPhotos(pagenumber);
  }, [pagenumber]);
  return { images, pageNumber, setPageNumber };
};
