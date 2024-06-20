import { API_OPTIONS, GET_MOVIES } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'


// Get the data from the api for the new movees
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const nowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

    const getMovies = async() => {
      const data = await fetch(GET_MOVIES, API_OPTIONS);
      const movies = await data.json();

      dispatch(addNowPlayingMovies(movies.results));
    }
    
    useEffect(() => {
      !nowPlayingMovies && getMovies();
    },[])
}

export default useNowPlayingMovies;
