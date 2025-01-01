import React from "react";
import "./cartMovie.css";
import { Link } from "react-router-dom";
function CartMovie({ movie,setIdFilm }) {
  const posterBaseUrl = "https://image.tmdb.org/t/p/w500";
 
  return (
    <div className="movie-card " onClick={()=> setIdFilm(movie.id)}>
      <Link to="/details">

        <img
          className=" img-movie"
          src={`${posterBaseUrl}${movie.poster_path}`}
          alt={movie.title}
        />
        <div class="movie-details">
          <h4>Title: {movie.title}</h4>
          <p>Release Date: {movie.release_date}</p>
          <p>Vote Average: {movie.vote_average}</p>
          <p>Vote Count: {movie.vote_count}</p>
        </div>
      </Link>
    </div>
  );
}

export default CartMovie;
