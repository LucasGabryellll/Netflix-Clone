import React, { useState } from "react";

import './index.css';
import { Movie } from "../../@types/@TypeMovie";

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import ReactPlayer from 'react-player';

export default function MovieRow({ title, items }: Movie) {
  const [scrollX, setScrollX] = useState(0);
  const [trailerUrl, setTrailerUrl] = useState('');

  const movieTrailer = require('movie-trailer');

  function handleLeftArrow() {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }

    setScrollX(x);
  }

  function handleRightArrow() {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items?.results.length * 150;

    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }

    setScrollX(x);
  }

  async function handleOnClick(movie: any) {
    const urlMovie = await movieTrailer(movie?.title || movie?.name || movie?.original_name || "");

    if (trailerUrl && trailerUrl === urlMovie) {
      setTrailerUrl("");

    } else {
      try {
        setTrailerUrl(urlMovie);

      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div className="movieRow--list"
          style={{
            marginLeft: scrollX,
            width: items?.['results']?.length * 150
          }}
        >
          {items?.["results"]?.length > 0 && items?.['results'].map((index, key) => (
            <div key={key} className="movieRow--item">
              <img
                onClick={async () => handleOnClick(index)}
                src={`https://image.tmdb.org/t/p/w300${index.poster_path}`}
                alt={index?.original_title}
              />
            </div>
          ))}
        </div>
      </div>

      {trailerUrl && (
        <div style={{ paddingLeft: 50 }}>
          <ReactPlayer url={trailerUrl} playing={true} />
        </div>)
      }
    </div>
  );
}