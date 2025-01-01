import React from 'react';
import CartMovie from './CartMovie';
import "./hero.css";
import PaginationMovies from './Pagination';

function Hero({ movies, getPage, totalPages,totalPagesTosearch,word,idFilm,setIdFilm }) {
  return (
   <div>
     <div className='section-movies'>
       {movies.length > 1 ? movies.map((movie) => (
         <CartMovie idFilm={idFilm} setIdFilm={setIdFilm} key={movie.id} movie={movie} />
       )) : <p>There are no movies...</p>}
     
     </div>
       <PaginationMovies getPage={getPage} totalPages={totalPages} totalPagesTosearch={totalPagesTosearch} query={word} />
   </div>
  );
}

export default Hero;
