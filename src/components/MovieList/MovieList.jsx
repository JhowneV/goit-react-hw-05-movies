import React from 'react';
import PropTypes from 'prop-types';
import css from './MovieList.module.css'; // Use CSS Modules

const MovieList = ({ movies }) => (
  <ul className={css.movieList}>
    {movies.map((movie) => (
      <li key={movie.id} className={css.movieCard}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className={css.moviePoster}
        />
        <h3 className={css.movieTitle}>{movie.title}</h3>
      </li>
    ))}
  </ul>
);

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    })
  ).isRequired,
};

export default MovieList;

