import React, { useEffect, useState } from 'react';
import { useParams, Link, Route, Routes } from 'react-router-dom';
import { getMovieDetails } from '../services/api';
import Cast from '../Components/Cast/Cast';
import Reviews from '../Components/Reviews/Reviews';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(movieId).then(data => setMovie(data));
  }, [movieId]);

  if (!movie) return null;

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>

      <nav>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </div>
  );
}

export default MovieDetailsPage;
