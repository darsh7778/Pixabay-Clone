import React, { useEffect, useState } from "react";
import PixabayContext from "./PixabayContext";

const PixabayState = (props) => {
    const [imageData, setImageData] = useState([]);
    const [query, setQuery] = useState("london");

    const apiKey = "52075014-2d71b7264531265e32cb0ccc1";

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data);
    };
    fetchData();
  }, [query]);

  const fetchImageByCategory = async (cat) => {
      const api = await fetch(
        `https://pixabay.com/api/?key=${apiKey}&category=${cat}&image_type=photo&pretty=true&per_page=100`
      );
      const data = await api.json();
      setImageData(data.hits);
      console.log(data.hits);
  }

  return (
    <PixabayContext.Provider value={{ imageData, fetchImageByCategory, setQuery}}>
      {props.children}
    </PixabayContext.Provider>
  );
};

export default PixabayState;
