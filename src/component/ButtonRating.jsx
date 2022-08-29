import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGuestRating, unsetGuestRating } from '../features/movieSlice';
import { AiFillStar } from "react-icons/ai";
import LoadingButton from './LoadingButton';

const ButtonRating = ({id}) => {

const [rating, setRating] = useState(0.5);
const [message, setMessage] = useState('');
const [loading, setLoading] = useState(false);

const starr = [2,4, 6, 8, 10];

const dispatch = useDispatch();

const guest_session = useSelector((state) => state.guest_Session);

const guest_Rating = useSelector((state) => state.guestRating);

let findGuestRate = guest_Rating.filter(item => {
  return item.guestId === guest_session }
  );

let findRate = findGuestRate.find(item => 
  // eslint-disable-next-line eqeqeq
  item.movieId == id
  );

    const colorStar = (val) => {
      if(findRate) {
        if(val <= findRate.rate ) {
                    return 'text-2xl text-yellow-400 cursor-pointer'
                } else {
                    return 'text-2xl text-gray-600 cursor-pointer'
        }
      } else {
        if(val <= rating ) {
            return 'text-2xl text-yellow-400 cursor-pointer'
        } else {
            return 'text-2xl text-gray-600 cursor-pointer'
        }

      }

        
    }


    const rateMovies = (val) => {
        if(loading) {
            return;
        }  else {
             setRating(val);
        }
    }
 



const handleClick = (guestId, movieId, rate) => {
   if(loading) {
      setMessage('Pemberian rating sedang diproses ...');
      return;
   }
    if(rating <= 0.5) {
        setMessage('Berikan rating terlebih dahulu');
        return;
    }
      const url2 = `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${guest_session}&api_key=bce0e8ef1edce22d33a2def9e94c5113`;
    if(rating > 0.5) {
              setLoading(true);

        fetch(url2, {
          method: 'POST',
          body: JSON.stringify({
             value : rating
          }),
          headers : {
            "Content-type" : "application/json"
          }
        })
        .then(res => res.json())
        .then((data) => {
          if(data.status_code === 1) {
             dispatch(setGuestRating({guestId, movieId,rate}));
             setLoading(false);
            setMessage('terimakasih atas ratingnya');
            }
       else {
          throw new Error(data.status_message) }
          } 
         )
        .catch((error) => {
          console.error(error);
        });    
        }

      }

  const handleCancelRating = (findRateId, movieId) => {
    if(loading) {
      setMessage('pembatalan rating sedang diproses ...');
          return;
   }
     if(findRate) {
    setLoading(true);
      const url2 = `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${guest_session}&api_key=bce0e8ef1edce22d33a2def9e94c5113`;
        fetch(url2, {
          method: 'DELETE',
          body: JSON.stringify({
             value : rating
          }),
          headers : {
            "Content-type" : "application/json"
          }
        })
        .then(res => res.json())
        .then((data) => {
          if(data.status_code === 13) {
             dispatch(unsetGuestRating(findRateId));
             setLoading(false);
              setMessage('');
            setRating(0.5);
         
            }
       else {
          throw new Error(data.status_message) }
          } 
         )
        .catch((error) => {
          console.error(error);
        });    

     }
  }

  return (
    <>
       <div className='rating-button mt-6 flex flex-col justify-center items-center md:items-start md:mx-3'> 
             <div className='flex flex-row m-2 md:ml-0'>
              { starr.map((val, index) => (
                <div key={index} className='mx-2 md:ml-0 md:mr-2'>
                <AiFillStar className={colorStar(val)} onClick={() => rateMovies(val)}/>
              </div>
              ))}
              </div>
              { message && <p className='text-white text-base mx-4 md:ml-0'> {message} </p>}
              <div className='relative w-60 md:w-52 text-center px-auto'>  
               { 
                findRate ? 
              <div onClick={() => handleCancelRating(findRate.id, id)} className='mx-auto w-36 text-center cursor-pointer mt-4 md:mr-4 md:ml-0 bg-gray-700 rounded-md px-4 py-2 text-white '> Cancel Rating </div> 
              : 
              <div onClick={() => handleClick(guest_session, id, rating)}  className='mx-auto  w-36 text-center cursor-pointer mt-4 md:mr-4 md:ml-0 bg-red-500 rounded-md px-4 py-2 text-white '> Send Rating </div>
               }
                  
               {
                loading && <LoadingButton />
            
               }
                </div>
           </div>
  </>
  )
}

export default ButtonRating
