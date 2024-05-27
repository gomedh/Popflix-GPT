import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

// ********************************* - Variables & Hooks - **********************************

// Custom hook to call the movies api from TMDB
useNowPlayingMovies(); 
useTopRatedMovies();
useUpcomingMovies();

// ********************************* - Return - **********************************
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* {
        MainContainer
          - Video Background
          - Video Title
        Secondary Container
          - Movie List * n
          - Movie Card * n
      } */}
    </div>
  )
}

export default Browse
