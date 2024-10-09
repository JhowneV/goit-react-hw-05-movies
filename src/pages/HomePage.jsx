import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from '../services/api';
import MovieList from '../Components/Shared/MovieList/MovieList';

function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(data => setMovies(data.results));
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
