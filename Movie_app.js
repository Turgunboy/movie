import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./Movie_app.css";

const FEATURED_API =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popolarity.desc&api_key=04c35731a5ee918f014970082a0088b1&page-1 ";
const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function Movie_app() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState(" ");
  useEffect(() => {
    getRes(FEATURED_API);
  }, []);

  const getRes = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const onChangeSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getRes(SEARCH_API + searchTerm);

      setsearchTerm("");
    }
  };
  const onchange = (e) => {
    setsearchTerm(e.target.value);
  };
  return (
    <>
      <header>
        <form onSubmit={onChangeSubmit}>
          <input type="text" onChange={onchange} value={searchTerm} />
        </form>
      </header>
      <div className="app_movie">
        {movies.length > 0 &&
          movies.map((movie, index) => <Movie {...movie} key={movie.id} />)}
      </div>
    </>
  );
}

export default Movie_app;
