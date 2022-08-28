import React, {useEffect, useState} from 'react'
import LoadingApi from './LoadingApi';
import MovieList from './MovieList';


const SearchMovie = ({nameMovie}) => {

  const [movies, getMovies]= useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

       const fetchData = async (name) => {
        setLoading(true);
        try {
            const URL = `https://api.themoviedb.org/3/search/movie?query=${name}&api_key=bce0e8ef1edce22d33a2def9e94c5113&language=en-US&page=1&include_adult=false`;
            const result = await fetch(URL);
            const res = await result.json();
            getMovies(res.results);
                setLoading(false);
        } catch (error) {
            console.error(error)
        }
    }

    fetchData(nameMovie ? nameMovie : 'barbie')

    }, [nameMovie])

    let dataSearch; 

     if(nameMovie) {
      if(movies.length >= 10) {
          dataSearch = movies.splice(0, 9);
      } else {
         dataSearch = movies;
      }
     }
 
  

  return (
    <div className='flex flex-wrap items-center pl-3 justify-center ' >
    {
       loading ? (
        <LoadingApi />
      ) : dataSearch.length > 0 ? (
  <div className='flex flex-wrap items-start justify-start  pl-2' > 
          {  dataSearch &&
              dataSearch.map((item, index) => 
            <MovieList key={index} id={item.id} poster_path={item.poster_path} title={item.original_title} />
            )
          } 
          </div>
      ) : 
        <div className='text-white text-lg'> data is not found </div> 
      
    }
     
    </div>
  )
}

export default SearchMovie
