import React from 'react'
import { useSelector } from'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    if(!movies) return; // This is also known as early return

    // Random movie index generation
    const randomIndex = Math.floor(Math.random() * movies.length);
    const firstMovie = movies[randomIndex];
  
    const {original_title, overview, id} = firstMovie;

    return (
    <div>
      <VideoTitle title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer
