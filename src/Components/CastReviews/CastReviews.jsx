import React from 'react';
import Cast from '../Components/Cast/Cast.jsx';
import Reviews from '../Reviews/Reviews';
import css from './CastReviews.module.css'; 

const CastReviews = ({ movieId }) => {
    return (
        <div className={css.castReviewsContainer}>
            <span className={css.castReviewsTitle}>CastReviews</span> 
            <div className={css.castSection}>
                <h2>Cast</h2>
                <Cast movieId={movieId} />
            </div>
            <div className={css.reviewsSection}>
                <h2>Reviews</h2>
                <Reviews movieId={movieId} />
            </div>
        </div>
    );
};

export default CastReviews;
