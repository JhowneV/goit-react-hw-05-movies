// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { getMovieCredits } from '../../api';
// import { getMovieCast } from '../../api';
// import styles from './Cast.module.css';

// const Cast = () => {
//   const { movieId } = useParams();
//   const [cast, setCast] = useState([]);

//   useEffect(() => {
//     getMovieCredits(movieId).then(setCast);
//   }, [movieId]);

//   return (
//     <ul className={styles.castList}>
//       {cast.map((actor) => (
//         <li key={actor.id}>
//           <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
//           <p>{actor.name}</p>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Cast;


import React, { useEffect, useState } from 'react';
import { getMovieCast } from '../../api'; 

const Cast = ({ movieId }) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      const castData = await getMovieCast(movieId);
      setCast(castData);
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;