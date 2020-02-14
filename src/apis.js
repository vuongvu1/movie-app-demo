import {API_KEY} from 'react-native-dotenv';

export const BASE_API = 'https://api.themoviedb.org/3';
export const IMAGE_API = 'https://image.tmdb.org/t/p/';

export const fetchTopRated = () =>
  fetch(`${BASE_API}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });

export const fetchTopPopular = () =>
  fetch(`${BASE_API}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });

export const fetchUpcoming = () =>
  fetch(`${BASE_API}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });

export const searchMovie = query =>
  fetch(`${BASE_API}/search/movie?api_key=${API_KEY}&query=${query}&page=1`)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      console.log(error);
    });
