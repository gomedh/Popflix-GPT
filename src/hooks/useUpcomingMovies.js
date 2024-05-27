import { API_OPTIONS, GET_UPCOMING_MOVIES } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../utils/movieSlice';
import { useEffect } from 'react'


// Get the data from the api for the new movees
const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async() => {
      const data = await fetch(GET_UPCOMING_MOVIES, API_OPTIONS);
      const upcomingMovies = await data.json();
      console.log(upcomingMovies);

      dispatch(addUpcomingMovies(upcomingMovies.results));
    }
    
    useEffect(() => {
      getUpcomingMovies();
    },[])
}

export default useUpcomingMovies;
