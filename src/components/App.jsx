import React, { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Header from './Header/Header'; 
import Loader from './Loader/Loader'; 

const Home = lazy(() => import('../pages/Home/Home')); 
const MoviesPage = lazy(() => import('../pages/Movies/Movies')); 
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails')); 
const Cast = lazy(() => import('../components/Cast/Cast')); 
const Reviews = lazy(() => import('../components/Reviews/Reviews')); 

const App = () => (
  <>
    <Header />
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  </>
);

export default App;
