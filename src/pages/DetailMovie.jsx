import React from 'react'
import { useQuery} from 'react-query';
import {  useParams } from "react-router-dom";
import Navbar from '../component/Navbar';
import ButtonRating from '../component/ButtonRating';
import LoadingApi from '../component/LoadingApi';

const getDetailMovie = async (id) => {
  const URL = `https://api.themoviedb.org/3/movie/${id}?api_key=bce0e8ef1edce22d33a2def9e94c5113&language=en-US`;
  const result = await fetch(URL);
  const res = await result.json();
  return res;
}


const DetailMovie = () => {
    
const { id } = useParams();

 const {data, isSuccess, isLoading} = useQuery('get-detailmovies', () => getDetailMovie(id), {
    })

    const Base_URLDetail = 'https://image.tmdb.org/t/p';


    const backgroundMovies = () => {
      if(data.backdrop_path === null) {
        return 'h-8 md:h-[500px] xl:h-[600px] opacity-95 md:opacity-75'
      } else {
      return 'h-56 md:h-[430px] xl:h-[480px] opacity-95 md:opacity-75'

      }
    }
  return (
     <div className='pb-8 min-h-screen relative' style={{   backgroundColor: '#201F1F' }}>
         <Navbar />
 {
       isLoading ? (
        <LoadingApi />
      ) : data && isSuccess ? (
  <div key={data.id} className=''> 
            <div className={backgroundMovies()}> 
            {
              data.backdrop_path &&  (
                <> 
 <img alt="img" className="w-full h-full object-cover object-top z-0" src={`${Base_URLDetail}/w1280/${data.backdrop_path}`}  />
              </>
              ) 
            }
              </div>  
              <div className='md:px-6 mt-6 md:mt-14 lg:absolute top-[10%] lg:top-[14%] xl:top-[18%] left-6 opacity-100'> 
              <div className='content-movie pt-2 mx-3 lg:w-3/5'>
             <h2 className='font-bold text-2xl text-white'> {data.original_title} </h2>
              <p className='text-gray-200 font-normal pt-2 md:font-medium'> {data.release_date}  </p>
              <h3 className='mt-3 pb-1 text-white md:font-medium'> Overview </h3>
              <p className=' text-justify text-white text-base md:font-medium'> {data.overview.slice(0, 200)+'...'} </p>
               </div> 
           <ButtonRating id={data.id} />
           </div>
           </div>
           )
         
       : null
    }
    </div>
  )
}

export default DetailMovie
