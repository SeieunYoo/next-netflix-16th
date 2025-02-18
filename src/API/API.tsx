import axios from 'axios';

export const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const POST_PATH = 'https://image.tmdb.org/t/p/w500';

export const API = {
  Preview: `${BASE_URL}/trending/all/day?api_key=${API_KEY}`,
  Popular: `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
  TopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`,
  NowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
  Search: `${BASE_URL}/search/movie?api_key=${API_KEY}`,
};

export const URL = {
  PostPath: `${POST_PATH}`,
};

export const getDetail = (id: string) => {
  return axios
    .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
    .then((response) => response.data);
};

export const getTrending = () => {
  return axios.get(`${API.Preview}`).then((response) => response.data.results);
};

export const getPopular = () => {
  return axios.get(`${API.Popular}`).then((response) => response.data.results);
};

export const getTopRated = () => {
  return axios.get(`${API.TopRated}`).then((response) => response.data.results);
};

export const getNowPlaying = () => {
  return axios
    .get(`${API.NowPlaying}`)
    .then((response) => response.data.results);
};
