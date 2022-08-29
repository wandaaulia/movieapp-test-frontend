import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import { AiOutlineSearch } from "react-icons/ai";
import SearchMovie from '../component/SearchMovie';


const Search = () => {

  const [findMovies, setFindMovies] = useState('');

  return (
    <div className='flex flex-col min-h-screen' style={{   backgroundColor: '#201F1F' }}> 
      <Navbar />
        <h1 className='text-white text-xl font-medium text-center pt-8'> Search Movies </h1>
       <div className='md:mb-8 md:flex-row flex md:px-4 flex-col justify-center items-center md:justify-center'>  
   <div className='mx-4 lg:w-fit mt-4 md:mt-10 w-fit flex flex-row py-2 xl:py-1 justify-center px-2  border border-gray-300 rounded-lg border-solid items-center bg-white'> 
         <form id="form">
           <button className='w-fit text-base mr-2 md:mr-4 h-fit text-gray-500'> <AiOutlineSearch/> </button>
     <input value={findMovies} onChange={(e) => setFindMovies(e.target.value)} type="text" id="name" name="name" placeholder='Search movies' className='lg:py-2  w-72 py-1 text-sm placeholder:text-gray-500'/>
         </form>
 </div>
 </div>
    <div className='px-2 mt-6 md:px-10 '> 
   <SearchMovie nameMovie={findMovies ? findMovies : 'naruto'} />
  </div>

    </div>
  )
}

export default Search
