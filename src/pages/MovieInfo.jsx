import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MovieInfo() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  async function fetchMovies() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=f5bbb04b&i=${id|| "tt0848228"}`
    );
    setMovies(data);
    setLoading(false);
    console.log(data)
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
          <div
            className="container"
            key={movies.imdbID}
          >
            <div className="row">
              <div className="movie-list">
                <div className="movie">
                  <div className="movie-card">
                    <div className="movie-card__container">
                      <h3 className="movie-poster">
                        <img
                          src={movies.Poster}
                          alt=""
                        />
                      </h3>
                      <p className="movie-title">{movies.Title}</p>
                      <p className="movie-year">{movies.Year}</p>
                      <p className="movie-plot">{movies.Plot}</p>
                      <p className="movie-rating">{movies.imdbRating}</p>
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
