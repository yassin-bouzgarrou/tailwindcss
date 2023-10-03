import { createSlice } from "@reduxjs/toolkit";
import mockMovies from "../data/mockData";

const movieSlice =createSlice({
    name:"movies",
    initialState:{
        movies:mockMovies,
        favorites:[]
},
reducers:{
    addToFavorites:(state,action)=>{
        const movieId=action.payload
        const movie =state.movie.find((m)=>m.id===movieId)
        if(movie){
            if(!state.favorites.includes(movieId)){
                state.favorites.push(movieId)
            }
        }
    },
    removeFromFavorites:(state,action)=>{
        const movieId=action.payload
        const index=state.favorites.indexOf(movieId)

        if(index!==-1){
            state.favorites.splice(index,1)
        }
    }
}
})







export const {addToFavorites,removeFromFavorites}=movieSlice.actions
export default movieSlice.reducer 