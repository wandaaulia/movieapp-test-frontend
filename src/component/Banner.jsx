import React from 'react'
import { useQuery} from 'react-query';
import LoadingApi from './LoadingApi';


const getTrailer = async () => {
  const URL = 'https://api.themoviedb.org/3/movie/301528/videos?api_key=bce0e8ef1edce22d33a2def9e94c5113&language=en-US';
  const result = await fetch(URL);
  const res = await result.json();
  return res;
}

const Banner = () => {

       const {data, isSuccess, isLoading} = useQuery('get-trailer', getTrailer, {
    })


  return (
    <div className="md:flex w-full backdrop-brightness-50 bg-cover">
       {
       isLoading ? (
        <div className='flex w-full object-cover object-center justify-center items-center'>  
                <LoadingApi />
        </div>
      ) : isSuccess ? (
        <div className=' w-full h-full object-cover object-center backdrop-brightness-50'> 
        <iframe
        frameBorder="0"
        src={`https://www.youtube.com/embed/${data.results[0].key}?controls=0&autoplay=1&mute=1&showinfo=0&loop=1&rel=0
        `}
        autoPlay
        allow="autoplay"
        title="trailer"
        className='iframe '
      ></iframe>
      </div>
      ) : null
       }
    </div>
  )
}

export default Banner
