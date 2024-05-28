import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchInputBar from './GptSearchInputBar'

const GPTSearch = () => {
  return (
    <div>
      <GptSearchInputBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GPTSearch
