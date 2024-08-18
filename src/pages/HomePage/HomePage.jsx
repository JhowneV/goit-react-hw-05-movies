// import { useEffect, useState } from "react";
// import MovieList from '../components/MovieList/MovieList';  // Correct path
// import { fetchTrendingMovies } from "services/movie-api";
// import Loader from '../components/Loader/Loader';  // Correct path

// const HomePage = () => {
//     const [trendingMovies, setTrendingMovies] = useState([]);

//     useEffect(() => {
//         (async () => {
//             try {
//                 const movies = await fetchTrendingMovies();
//                 setTrendingMovies(movies);
//             } catch (error) {
//                 console.error(error);
//             }
//         })();
//     }, []);

//     return (
//         <div>
//             <h2>Trending Movies</h2>
//             {trendingMovies.length === 0 ? (
//                 <Loader />
//             ) : (
//                 <MovieList movies={trendingMovies} />
//             )}
//         </div>
//     );
// };

// export default HomePage;


// import { useEffect, useState } from 'react';
// import { getTrendingMovies } from '../../api';
// import MovieCard from '../../components/MovieCard/MovieCard';
// import styles from './Home.module.css';

// const Home = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     getTrendingMovies().then(setMovies);
//   }, []);

//   return (
//     <div className={styles.home}>
//       <h1>Trending Movies</h1>
//       <ul className={styles.movieList}>
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Home;


import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../api';
import MovieCard from '../../components/MovieCard/MovieCard';
import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(setMovies);
  }, []);

  return (
    <div className={styles.home}>
      <h1>Trending Movies</h1>
      <ul className={styles.movieList}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
