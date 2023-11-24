import axios from 'axios';

export const fetchMovies = (url) => {
  return axios.get(url)
    .then((response) => response.data.results)
    .catch((error) => {
      console.error("Error fetching movies:", error);
      return [];
    });
};
