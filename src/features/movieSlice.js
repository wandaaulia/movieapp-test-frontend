import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  guest_Session : 0,
  guestRating : [],
}

export const movieSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setGuestSession: (state, action) => {
      state.guest_Session = action.payload
    },
    setGuestRating : (state, action) => {
    const pseudoId = Math.random().toString(16).slice(2);

    state.guestRating.push({
      id: pseudoId,
      guestId : action.payload.guestId,
      movieId:  action.payload.movieId,
      rate : action.payload.rate, 
     });
    },
     unsetGuestRating : (state, action) => {
     state.guestRating = state.guestRating.filter((item) => item.id !== action.payload);
    },
  },
})


export const { setGuestSession, setGuestRating, unsetGuestRating } = movieSlice.actions



export default movieSlice.reducer