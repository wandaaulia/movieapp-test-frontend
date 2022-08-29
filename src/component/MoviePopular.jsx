import React from 'react'
import { useQuery} from 'react-query';
import { useNavigate } from "react-router-dom";
import LoadingApi from './LoadingApi';
import MovieList from './MovieList';
import MoviePopularList from './MoviePopularList';

const getMoviesPopular = async () => {
  const URL = 'https://api.themoviedb.org/3/movie/popular?api_key=bce0e8ef1edce22d33a2def9e94c5113&language=en-US&page=1';
  const result = await fetch(URL);
  const res = await result.json();
  return res;
}


const MoviePopular = () => {


     const {data, isSuccess, isLoading} = useQuery('get-movies', getMoviesPopular, {
    })

     let arr;

   if(data) {
    arr = data.results.splice(0, 8);
   }
  

  return (
    <div className='flex flex-wrap pl-2 pr-3 justify-start' >
 {
       isLoading ? (
         <div className='flex w-full object-cover object-center justify-center items-center'>  
        <LoadingApi />
        </div>
      ) : isSuccess ? (
  arr.map((item, index) => 
           <MoviePopularList key={index} id={item.id} poster_path={item.poster_path} title={item.original_title} />
           )
           )
         
       : null
    }
       
    </div>
  )
}

export default MoviePopular
