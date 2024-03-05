import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { searchTitle } = useParams();

  function filterMovies(filter) {
    if(!movies) return;
    if (filter === "A_TO_Z") {
        setMovies([...movies].sort((a, b) => (a.Title > b.Title ? 1 :-1)))
    }
    if (filter === "Z_TO_A") {
        setMovies([...movies].sort((a, b) => b.Title > a.Title ? 1 : -1))
    }
    if (filter === "NEWEST RELEASE") {
        setMovies([...movies].sort((a, b) => b.Year > a.Year ? 1 : -1))
    }
  }

  async function getMovies(movieTitle) {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=f5bbb04b&s=${searchTitle}`
    );
    setLoading(false);
    setMovies(data.Search);
    console.log(data)
  } 

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <select
        id="filter"
        defaultValue="DEFAULT"
        onChange={(event) => filterMovies(event.target.value)}
      >
        <option value="DEFAULT" disabled>
          Sort
        </option>
        <option value="A_TO_Z">A to Z</option>
        <option value="Z_TO_A">Z to A</option>
        <option value="NEWEST RELEASE">Newest Release</option>
      </select>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.slice(0, 4).map((movie) => (
          <div className="container" key={movie.imdbID}>
            <div className="row">
              <div className="movie-list">
                <div className="movie">
                  <div className="movie-card">
                    <div className="movie-card__container">
                      <h3 className="movie-poster">
                        <img src={movie.Poster} alt="" />
                      </h3>
                      <p className="movie-title">{movie.Title}</p>
                      <p className="movie-year">{movie.Year}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
