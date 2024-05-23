import React from 'react'
import { useSelector } from'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return; // This is also known as early return
    const firstMovie = movies[0];
    console.log(firstMovie);
  
    const {original_title, overview} = firstMovie;

    return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground />
    </div>
  )
}

export default MainContainer
