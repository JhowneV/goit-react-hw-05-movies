// import axios from 'axios';

// const API_KEY = '5426faed42697a585a9dfacf9cea00bb';
// const BASE_URL = 'https://api.themoviedb.org/3';

// export const getTrendingMovies = async () => {
//   const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
//   return response.data.results;
// };

// export const searchMovies = async (query) => {
//   const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
//   return response.data.results;
// };

// export const getMovieDetails = async (movieId) => {
//   const response = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
//   return response.data;
// };

// export const getMovieCredits = async (movieId) => {
//   const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
//   return response.data.cast;
// };

// export const getMovieReviews = async (movieId) => {
//   const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
//   return response.data.results;
// };

import axios from 'axios';

const API_KEY = '5426faed42697a585a9dfacf9cea00bb';
const BASE_URL = 'https://api.themoviedb.org/3';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY }
});

export const getTrendingMovies = async () => {
  try {
    const response = await axiosInstance.get('/trending/movie/day');
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axiosInstance.get('/search/movie', { params: { query } });
    return response.data.results;
  } catch (error) {
    console.error('Error searching for movies:', error);
    throw error;
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for movie ${movieId}:`, error);
    throw error;
  }
};

export const getMovieCast = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/credits`);
    return response.data.cast;
  } catch (error) {
    console.error(`Error fetching cast for movie ${movieId}:`, error);
    throw error;
  }
};

export const getMovieReviews = async (movieId) => {
  try {
    const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
    return response.data.results;
  } catch (error) {
    console.error(`Error fetching reviews for movie ${movieId}:`, error);
    throw error;
  }
};

