import { useState } from 'react';
import { searchMovies } from '../../api';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Movies.module.css';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(query).then(setMovies);
  };

  return (
    <div className={styles.movies}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
        />
        <button type="submit">Search</button>
      </form>
      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Movies;
