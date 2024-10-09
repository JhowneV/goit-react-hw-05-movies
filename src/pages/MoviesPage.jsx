// import React, { useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { searchMovies } from '../services/api';
// import MovieList from '../Components/Shared/MovieList/MovieList';

// function MoviesPage() {
//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const searchQuery = query.trim();
//     if (!searchQuery) return;

//     setSearchParams({ query: searchQuery });
//     const { results } = await searchMovies(searchQuery);
//     setMovies(results);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={query}
//           onChange={e => setQuery(e.target.value)}
//           placeholder="Search movies"
//         />
//         <button type="submit">Search</button>
//       </form>
//       {movies.length > 0 && <MovieList movies={movies} />}
//     </div>
//   );
// }

// export default MoviesPage;


import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovies } from '../services/api';
import MovieList from '../Components/Shared/MovieList/MovieList';

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    if (searchQuery) {
      const fetchMovies = async () => {
        const { results } = await searchMovies(searchQuery);
        setMovies(results);
      };
      fetchMovies();
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const searchQuery = query.trim();
    if (!searchQuery) return;

    setSearchParams({ query: searchQuery });
    const { results } = await searchMovies(searchQuery);
    setMovies(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      {movies.length > 0 && <MovieList movies={movies} />}
    </div>
  );
}

export default MoviesPage;
