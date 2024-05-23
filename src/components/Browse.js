import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants';

const Browse = () => {

// ********************************* - Variables & Hooks - **********************************

// ********************************* - Methods - **********************************
const getMovies = async() => {
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
  const movies = await data.json();
  console.log(movies);
}

useEffect(() => {
  getMovies();
},[])

// ********************************* - Return - **********************************
  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse
