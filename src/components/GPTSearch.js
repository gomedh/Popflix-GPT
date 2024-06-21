 import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchInputBar from './GptSearchInputBar'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
          <div  className='absolute -z-10'>
            <img className="h-screen object-cover md:h-auto" src={BG_URL} alt="bg-img" />
          </div>
          <div className=''>
            <GptSearchInputBar />
            <GptMovieSuggestions />
        </div>
    </>

  )
}

export default GPTSearch
