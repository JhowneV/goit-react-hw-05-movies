// import { lazy, Suspense } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Header from '../components/Header/Header';
// import Home from '../pages/Home/Home';
// import Movies from '../pages/Movies/Movies';
// import MovieDetails from '../pages/MovieDetails/MovieDetails';
// import Cast from '../components/Cast/Cast';
// import Reviews from '../components/Reviews/Reviews';

// const Home = lazy(() => import('./pages/Home/Home'));
// const Movies = lazy(() => import('./pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
// const Cast = lazy(() => import('./components/Cast/Cast'));
// const Reviews = lazy(() => import('./components/Reviews/Reviews'));

// const App = () => (
//   <Router>
//     <Header />
//     <Suspense fallback={<div>Loading...</div>}>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/movies/:movieId" element={<MovieDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </Suspense>
//   </Router>
// );

// export default App;


import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header/Header';

const Home = lazy(() => import('../pages/HomePage/HomePage'));
const Movies = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => (
  <Router>
    <Header />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  </Router>
);

export default App;
