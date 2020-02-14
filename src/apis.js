import {API_KEY} from 'react-native-dotenv';

export const BASE_API = 'https://api.themoviedb.org/3';
export const IMAGE_API = 'https://image.tmdb.org/t/p/';

const baseFetch = url =>
  fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });

export const fetchTopRated = () =>
  baseFetch(
    `${BASE_API}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  );

export const fetchTopPopular = () =>
  baseFetch(
    `${BASE_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  );

export const fetchUpcoming = () =>
  baseFetch(
    `${BASE_API}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  );

export const searchMovie = query =>
  baseFetch(
    `${BASE_API}/search/movie?api_key=${API_KEY}&query=${query}&page=1`,
  );
