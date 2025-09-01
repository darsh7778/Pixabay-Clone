import React, { useContext } from "react";
import PixabayContext from "../context/PixabayContext";

const Navbar = () => {
  const { fetchImageByCategory, setQuery } = useContext(PixabayContext);

  return (
    <>
      <div className="container text-center my-3">
        <button
          type="button"
          className="btn btn-outline-success mx-3"
          onClick={() => fetchImageByCategory("nature")}
        >
          Nature
        </button>
        <button
          type="button"
          className="btn btn-outline-info  mx-3"
          onClick={() => fetchImageByCategory("science")}
        >
          Science
        </button>
        <button
          type="button"
          className="btn btn-outline-light mx-3"
          onClick={() => fetchImageByCategory("fashion")}
        >
          Fashion
        </button>
        <button
          type="button"
          className="btn btn-outline-warning mx-3"
          onClick={() => fetchImageByCategory("education")}
        >
          Education
        </button>
        <button
          type="button"
          className="btn btn-outline-success mx-3"
          onClick={() => fetchImageByCategory("sports")}
        >
          Sports
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-3"
          onClick={() => fetchImageByCategory("music")}
        >
          Music
        </button>
        <button
          type="button"
          className="btn btn-outline-light mx-3"
          onClick={() => fetchImageByCategory("travel")}
        >
          Travel
        </button>
        <button
          type="button"
          className="btn btn-outline-warning mx-3"
          onClick={() => fetchImageByCategory("food")}
        >
          Food
        </button>
      </div>
      <div className="container">
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </>
  );
};

export default Navbar;
