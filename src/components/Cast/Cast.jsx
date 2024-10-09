import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from '../../services/api';
import css from './Cast.module.css';

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <ul className={css.castList}>
      {cast.map((actor, index) => (
        <li key={`${actor.cast_id}-${index}`}>
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

export default Cast;
