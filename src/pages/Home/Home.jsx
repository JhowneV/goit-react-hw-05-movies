import React, { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../services/movie-api'; // Corrected import
import MovieList from '../../components/MovieList/MovieList'; // Ensure this path is correct
import Loader from '../../components/Loader/Loader'; // Ensure this path is correct
import css from './Home.module.css'; // Ensure this path is correct

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await getTrendingMovies();
        setMovies(trendingMovies);
      } catch (error) {
        console.error('Failed to fetch trending movies:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className={css.home}>
      {loading ? <Loader /> : <MovieList movies={movies} />}
    </div>
  );
};

export default Home;
