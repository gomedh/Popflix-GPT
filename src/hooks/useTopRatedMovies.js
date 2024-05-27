import { API_OPTIONS, GET_TOP_RATED_MOVIES } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../utils/movieSlice';
import { useEffect } from 'react'


// Get the data from the api for the new movees
const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async() => {
      const data = await fetch(GET_TOP_RATED_MOVIES, API_OPTIONS);
      const topRatedMovies = await data.json();

      dispatch(addTopRatedMovies(topRatedMovies.results));
    }
    
    useEffect(() => {
      getTopRatedMovies();
    },[])
}

export default useTopRatedMovies;
