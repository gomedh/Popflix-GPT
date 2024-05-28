import React from 'react'

const GptSearchInputBar = () => {
  return (
    <div className='pt-[20%]'>
      <form className='w-1/2 bg-black'>
        <input className="p-4 m-4 " type="text" placeholder="What to watch today ?"></input>
        <button className="py-2 px-4 bg-red-700 rounded-lg text-white">Search</button>
      </form>
    </div>
  )
}

export default GptSearchInputBar
