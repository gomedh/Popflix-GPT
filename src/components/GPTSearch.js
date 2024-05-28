import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchInputBar from './GptSearchInputBar'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
      <div  className='absolute -z-10'>
          <img className="object-cover" src={BG_URL} alt="bg-img" />
      </div>
      <GptSearchInputBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GPTSearch
