import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [searchTitle, setSearchTitle] = useState();
  const navigate = useNavigate();

  function onSearch() {
    navigate(`/movies/${searchTitle}`)
  }


  return (
    <div>
      <nav>
        <div className="nav__container container">
          <div className="nav__row row">
            <div className="movie__search--container">
              <label className="movie__search--label">
                Search by Movie Title
              </label>
              <input
                type="text"
                value={searchTitle}
                onChange={(event) => setSearchTitle(event.target.value)}
                onKeyPress={(event) => {
                  if (event.key === "Enter") {
                    onSearch();
                  }
                }}
              />
              <button 
              onClick={() => onSearch()}
              > Enter
                </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
