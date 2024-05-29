import { useCallback } from 'react';
import { API_OPTIONS } from '../utils/constants';

const useSearchMovieTMDB = () => {
  const searchMovieTMDB = useCallback(async (movie) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error('Error fetching movie from TMDB:', error);
      return [];
    }
  }, []);

  return searchMovieTMDB;
};

export default useSearchMovieTMDB;
