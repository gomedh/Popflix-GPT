import { API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'


// Get the data from the api for the new movees
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getMovies = async() => {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
      const movies = await data.json();
      console.log(movies);
      dispatch(addNowPlayingMovies(movies.results));
    }
    
    useEffect(() => {
      getMovies();
    },[])
}

export default useNowPlayingMovies;
