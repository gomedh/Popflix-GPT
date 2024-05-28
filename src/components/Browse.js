import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'


const Browse = () => {

  const showGPTSearch = useSelector((store) => store?.gpt?.showGptSearch);

// ********************************* - Variables & Hooks - **********************************

// Custom hook to call the movies api from TMDB
useNowPlayingMovies(); 
useTopRatedMovies();
useUpcomingMovies();

// ********************************* - Return - **********************************
  return (
    <div>
      <Header />
      {
        showGPTSearch ? (<GPTSearch />) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>)
      }
    </div>
  )
}

export default Browse
