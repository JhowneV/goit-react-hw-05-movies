// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { searchMovies } from '../../api';
// import SearchBar from '../../components/SearchBar/SearchBar';
// import MovieList from '../../components/MovieList/MovieList';
// import Loader from '../../components/Loader/Loader';

// const Movies = () => {
//     const [searchResults, setSearchResults] = useState([]);
//     const [searchParams, setSearchParams] = useSearchParams();
//     const movieName = searchParams.get('query') ?? '';
//     const [isLoading, setIsLoading] = useState(false);

//     const updateQueryString = (query) => {
//         const nextParams = query !== '' ? { query } : {};
//         setSearchParams(nextParams);
//     };

//     useEffect(() => {
//         if (!movieName) return;

//         const fetchMovies = async () => {
//             setIsLoading(true);
//             try {
//                 const movies = await searchMovies(movieName);
//                 setSearchResults(movies.results);
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchMovies();
//     }, [movieName]);

//     return (
//         <div>
//             <SearchBar onSubmit={updateQueryString} />
//             {isLoading ? <Loader /> : <MovieList movies={searchResults} />}
//         </div>
//     );
// };

// export default Movies;

// import React, { useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { searchMovies } from '../../api';
// import { SearchBar } from 'components/SearchBar/SearchBar';
// import { Loader } from 'components/Loader/Loader';


// const Movies = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const movieName = searchParams.get('query') ?? '';
//   const [isLoading, setIsLoading] = useState(false);

//   const updateQueryString = (query) => {
//     const nextParams = query !== '' ? { query } : {};
//     setSearchParams(nextParams);
//   };

//   useEffect(() => {
//     if (!movieName) return;

//     const fetchMovies = async () => {
//       setIsLoading(true);
//       try {
//         const movies = await searchMovies(movieName);
//         setSearchResults(movies.results);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchMovies();
//   }, [movieName]);

//   return (
//     <div>
//       <SearchBar onSubmit={updateQueryString} />
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <ul>
//           {searchResults.map((movie) => (
//             <li key={movie.id}>
//               <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
//               <h3>{movie.title}</h3>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Movies;

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from '../../services/movie-api'; 
import css from './Movies.module.css'; 

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getMovieCast(movieId);
        setCast(castData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div className={css.container}>
      <div className={css.movieListContainer}>
        <h2 className={css.title}>Cast</h2>
        <ul className={css.castList}>
          {cast.map((actor) => (
            <li key={actor.id} className={css.movieItem}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className={css.moviePoster}
              />
              <div className={css.movieDetails}>
                <p className={css.movieTitle}>{actor.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cast;
