import { API_OPTIONS, GET_UPCOMING_MOVIES } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'


// Get the data from the api for the new movees
const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const upcomingMovies = useSelector(store => store.movies.upcomingMovies)

    const getUpcomingMovies = async() => {
      const data = await fetch(GET_UPCOMING_MOVIES, API_OPTIONS);
      const upcomingMovies = await data.json();

      dispatch(addUpcomingMovies(upcomingMovies.results));
    }
    
    useEffect(() => {
      !upcomingMovies && getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;
