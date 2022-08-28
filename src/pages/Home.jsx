import React from 'react'
import MoviePopular from '../component/MoviePopular'
import Navbar from '../component/Navbar'

const Home = () => {
  return (
    <div className='min-h-screen' style={{   backgroundColor: '#201F1F' }}>
    <Navbar />
    <div className='px-2 mt-6 md:px-10'> 
     <h1 className='px-1 text-white font-bold text-xl py-2 md:py-4'> Popular Movies </h1>
      <MoviePopular /> 
       </div>
    </div>
  )
}

export default Home
