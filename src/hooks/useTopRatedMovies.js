import { API_OPTIONS, GET_TOP_RATED_MOVIES } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';
import { useEffect } from 'react'


// Get the data from the api for the new movees
const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRatedMovies = useSelector(store => store.movies.topRatedMovies);

    const getTopRatedMovies = async() => {
      const data = await fetch(GET_TOP_RATED_MOVIES, API_OPTIONS);
      const topRatedMovies = await data.json();

      dispatch(addTopRatedMovies(topRatedMovies.results));
    }
    
    useEffect(() => {
      !topRatedMovies && getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;
