import React from 'react'
import { useNavigate } from "react-router-dom";
import imgNotFound from '../assets/img/image_not_found.png';

const MoviePopularList = ({id, poster_path, title}) => {

    const navigate = useNavigate();

    const toDetail = (id) => {
        navigate(`/detailMovie/${id}`)
    }

    const Base_URL = 'https://image.tmdb.org/t/p';

  return (
    <div className='flex flex-col md:w-52  w-[150px] flex-wrap my-4 mr-4 md:mr-3 lg:mr-5'> 
<div className='h-48 md:h-64 '>  
   <img alt="img" className="rounded-lg object-cover object-center cursor-pointer w-full h-full"  src={ poster_path ? `${Base_URL}/w500/${poster_path}` :  imgNotFound} 
        onClick={() => toDetail(id)}
 />
  </div>
 <div className='flex flex-wrap pt-3 md:pt-4'>
  <p className='text-white font-medium'> {title} </p>

  </div>
 </div>
  )
}

export default MoviePopularList
