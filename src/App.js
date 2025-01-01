import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import {Routes,Route} from "react-router-dom"
import DetailsMovie from './components/DetailsMovie';
function App() {
  const [movies, setMovies] = useState([]);  // For all movies
  const [filteredMovies, setFilteredMovies] = useState([]);  // For filtered movies
  const [word, setQuery] = useState('');  // Search term
  const [page, setPage] = useState(1);  // Current page
  const [totalPages, setTotalPages] = useState(0);  // Total number of pages
  const [totalPagesTosearch, setTotalPagesTosearch] = useState(0);  // Total number search of pages
  const [idFilm,setIdFilm]=useState(null);
  

  // Fetch movies either by popular movies or based on search term
  useEffect(() => {
    const url = word
      ? `https://api.themoviedb.org/3/search/movie?api_key=a58c17e8516ad87d31041f8ff76839ee&language=en&query=${word}&page=${page}`
      : `https://api.themoviedb.org/3/movie/popular?api_key=a58c17e8516ad87d31041f8ff76839ee&language=en&page=${page}`;
    
    axios.get(url)
      .then(function (response) {
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
        setTotalPages(response.data.total_pages);  // Set the total pages from the API response
        const totalResults = response.data.total_results;
        setTotalPagesTosearch(Math.ceil(totalResults / 20));
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, [word, page]);  // When `word` or `page` changes, make the API request

  const getPage = (page) => {
    setPage(page);
  }

  return (
    <div>
      <Navbar query={word} setQuery={setQuery}  />
      <Routes>
          <Route path="/" element={<Hero idFilm={idFilm} setIdFilm={setIdFilm}  movies={filteredMovies} getPage={getPage} totalPages={totalPages}  totalPagesTosearch={totalPagesTosearch} query={word}/>} />
          <Route path="/details" element={<DetailsMovie idFilm={idFilm} filteredMovies={filteredMovies} />} />
        </Routes>
    </div>
  );
}

export default App;
