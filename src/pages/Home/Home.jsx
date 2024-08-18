import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/movie-api'; // Correct path
import MovieList from '../../components/MovieList/MovieList'; // Correct path
import Loader from '../../components/Loader/Loader'; // Correct path

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);
  
  return (
    <div>
      {loading ? <Loader /> : <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
