import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

 const navigate = useNavigate();

 const navigateTo = link => {
    navigate(link)
 }

  return (
    <div className='text-zinc-400 py-4 md:py-8 px-4 md:px-10' 
   style={{   backgroundColor: '#201F1F' }}>
      <div className='flex flex-row justify-between'> 
        <h2  className='cursor-pointer' onClick={() => navigateTo('/')}> Movie  </h2>
        <ul className='flex flex-row'>
          <div className='mr-4 md:mr-8 xl:mr-10 cursor-pointer' onClick={() => navigateTo('/')}>Home</div>  
          <div  className='cursor-pointer' onClick={() => navigateTo('/search')}> Search </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
