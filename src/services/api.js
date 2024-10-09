// import axios from 'axios';

// const API_KEY = '5426faed42697a585a9dfacf9cea00bb'; // Ensure this is your actual API key
// const BASE_URL = 'https://api.themoviedb.org/3';

// // Create an axios instance with base URL and API key
// const axiosInstance = axios.create({
//   baseURL: BASE_URL,
//   params: { api_key: API_KEY },
// });

// // Function to search movies by query
// export const searchMovies = async (query) => {
//   const response = await axiosInstance.get('/search/movie', {
//     params: { query },
//   });
//   return response.data.results;
// };

// // Function to fetch trending movies
// export const fetchTrendingMovies = async () => {
//   const response = await axiosInstance.get('/trending/movie/day');
//   return response.data.results;
// };

// // Function to fetch movie details by movie ID
// export const fetchMovieDetails = async (movieId) => {
//   const response = await axiosInstance.get(`/movie/${movieId}`);
//   return response.data;
// };

// // Function to fetch movie credits by movie ID
// export const fetchMovieCredits = async (movieId) => {
//   const response = await axiosInstance.get(`/movie/${movieId}/credits`);
//   return response.data.cast;
// };

// // Function to fetch movie reviews by movie ID
// export const fetchMovieReviews = async (movieId) => {
//   const response = await axiosInstance.get(`/movie/${movieId}/reviews`);
//   return response.data.results;
// };


//////////////////////
const API_KEY = '5426faed42697a585a9dfacf9cea00bb';
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
  const response = await fetch(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
  return await response.json();
}

export async function searchMovies(query) {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
  return await response.json();
}

export async function getMovieDetails(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
  return await response.json();
}

export async function getMovieCredits(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`);
  return await response.json();
}

export async function getMovieReviews(movieId) {
  const response = await fetch(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return await response.json();
}
