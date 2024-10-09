import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../../services/api';
import css from './Reviews.module.css';

function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  if (reviews.length === 0) return <p>No reviews available.</p>;

  return (
    <ul className={css.reviewsList}>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Reviews;
