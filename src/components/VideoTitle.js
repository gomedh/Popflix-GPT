import React from 'react'

const VideoTitle = ({title, overview}) => {
    
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-gray-300 hover:cursor-pointer'> ▶️ Play</button>
        <button className='bg-gray-500 text-white p-4 px-12 text-xl rounded-lg bg-opacity-50 hover:bg-gray-700 hover:cursor-pointer mx-2'> ℹ️ More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
