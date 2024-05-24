import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from'react-redux';

const VideoBackground = ({movieId}) => {
    // fetch the trailer video
    useMovieTrailer(movieId);
    // Getting the trailer key from the store
    const trailerVideo = useSelector(store => store?.movies?.trailerVideo);

  return (
    <div>
      <iframe width="560" height="315" 
      src={"https://www.youtube.com/embed/" + trailerVideo?.key }
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      ></iframe>
    </div>
  )
}

export default VideoBackground
