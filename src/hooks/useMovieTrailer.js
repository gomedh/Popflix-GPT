import { useEffect } from 'react'
import { API_OPTIONS, GET_MOVIE_TRAILERS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    // Fetch the movie trailer video
    const getMovieVideo = async () => {
        const response  = await fetch( GET_MOVIE_TRAILERS + movieId +'/videos', API_OPTIONS );
        const data = await response.json(); 
        const filterData  = data.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.lenght ? filterData[0] : data.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(() => {
        getMovieVideo();
    }, [])
}

export default useMovieTrailer;
