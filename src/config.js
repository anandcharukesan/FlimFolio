// Configuration for TMDB
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY; // Access the API key from environment variable

// Images
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';

// Sizes: w300, w780, w1280, original
const BACKDROP_SIZE = 'w1280';

// w92, w154, w185, w342, w500, w780, original
const POSTER_SIZE = 'w500';

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
}
