import React from 'react'
import Lottie from 'lottie-react';
import LoadingGray from '../assets/animation/loading-gray.json'

const LoadingButton = () => {
  return ( 
        <div className='absolute bottom-0 right-1 flex flex-col justify-center h-auto items-center '>
         <div className='w-10 mx-auto my-auto'>
      <Lottie loop={true} animationData={LoadingGray} 
      />
    </div>
        </div>
  )
}

export default LoadingButton
