import React from 'react'
import Lottie from 'lottie-react';
import LoadingMovies from '../assets/animation/loading_movies.json'

const LoadingApi = () => {
  return (
        <div className='flex flex-col justify-center h-auto items-center '>
         <div className='w-32 mx-auto md:w-64 my-auto lg:w-48'>
      <Lottie loop={true} animationData={LoadingMovies} 
      />
    </div>
        </div>
  )
}

export default LoadingApi
