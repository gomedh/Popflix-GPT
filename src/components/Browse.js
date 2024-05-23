import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {

// ********************************* - Variables & Hooks - **********************************
useNowPlayingMovies(); // Custom hook to call the movies api from TMDB

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
