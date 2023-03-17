import axios from 'axios';

const BASE_URL = `https://api.themoviedb.org/3`;
const API_KEY = `fe343f967605f386408b9306e9b3c54f`;

export const fetchTrendingMovies = async () => {
  const resp = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return resp.data;
};

export const fetchMovieById = async id => {
  const resp = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  return resp.data;
};

export const fetchMovieCast = async id => {
  const resp = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}`
  );
  return resp.data;
};

export const fetchMovieReviews = async id => {
  const resp = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}`
  );
  return resp.data;
};

export const fetchMovieByKeyWord = async query => {
  const resp = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
  );
  return resp.data;
};
