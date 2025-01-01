import React from "react";
import "./detailsMovie.css";

function DetailsMovie({ idFilm,filteredMovies }) {
    const movieDatails=filteredMovies.find((movie)=>movie.id===idFilm);
    console.log(movieDatails);
    const releaseDate = movieDatails.release_date;
const year = new Date(releaseDate).getFullYear();

   
  return (
    <div
      className="details"
      style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_bestv2/${movieDatails.backdrop_path})`
      }}
    >
      <div className="details-content">
        <img
          src={` https://image.tmdb.org/t/p/w500${movieDatails.poster_path}`}
          alt={movieDatails.title}
          className="movie-image"
        />
        <div className="movie-info">
          <h1>{movieDatails.title} ({year})</h1>
          <h5>{movieDatails.release_date} ({movieDatails.original_language})</h5>
          <h5>{movieDatails.original_title}</h5>
          <h4>Overview</h4>
          <p>
            {movieDatails.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsMovie;
