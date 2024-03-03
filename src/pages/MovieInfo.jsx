import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieInfo() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  console.log(id);

  async function fetchMovies(movieId) {
    setLoading(true);
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=f5bbb04b&i=${movieId|| "tt0848228"}`
    );
    setMovies(data.Search);
    setLoading(false);
    console.log(data)
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        movies.map((id) => (
          <div
            className="container"
            key={id.imdbID}
          >
            <div className="row">
              <div className="movie-list">
                <div className="movie">
                  <div className="movie-card">
                    <div className="movie-card__container">
                      <h3 className="movie-poster">
                        <img
                          src={id.Poster}
                          alt=""
                        />
                      </h3>
                      <p className="movie-title">{id.Title}</p>
                      <p className="movie-year">{id.Year}</p>
                      <p className="movie-plot">{id.Plot}</p>
                      <p className="movie-rating">{id.imdbRating}</p>
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
