import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MovieInfo() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  async function fetchMovies(movieId) {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=f5bbb04b&i=${movieId|| "tt0848228"}`
    );
    setMovies(data.imdbID);
    setLoading(false);
    console.log(data.imdbID)
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
        <button onClick={() => navigate('/')}>Back</button>
      {loading ? (
        <h1>Loading.....</h1>
      ) : (
        movies.
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
        
      )}
    </div>
  );
}
