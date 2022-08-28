import React, {useEffect} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DetailMovie from './pages/DetailMovie';
import Home from './pages/Home';
import { useDispatch } from 'react-redux'
import { setGuestSession } from './features/movieSlice';
import Search from './pages/Search';


const Routers = () => {

 const dispatch = useDispatch();

const urlGuest = 'https://api.themoviedb.org/3/authentication/guest_session/new?api_key=bce0e8ef1edce22d33a2def9e94c5113';

  useEffect(() => {
    fetch(urlGuest)
    .then((res) => res.json())
    .then((data) => {
    dispatch(setGuestSession(data.guest_session_id))
    console.log(data);
})
.catch((error) => {
              console.log(error);
        });
}, [])



  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/detailMovie/:id" element={<DetailMovie />} />
      <Route path="/search" element={<Search />} />
    </Routes>
  </BrowserRouter>
  )
}

export default Routers

