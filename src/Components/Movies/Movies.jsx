import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieList from '../Shared/MovieList/MovieList';  
import { searchMovies } from '../../services/api';      

function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (searchQuery) {
      const fetchMovies = async () => {
        const { results } = await searchMovies(searchQuery);
        setMovies(results);
      };
      fetchMovies();
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchQuery = query.trim();
    if (!searchQuery) return;

    setSearchParams({ query: searchQuery });
    const { results } = await searchMovies(searchQuery);
    setMovies(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default Movies;
