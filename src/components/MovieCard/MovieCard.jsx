import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

function MovieCard({ title, posterPath }) {
  return (
    <div className={styles.card}>
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
    </div>
  );
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
};

export default MovieCard;
