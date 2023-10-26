import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    // name : 슬라이스 이름 정의
    name: 'movies',

    // initialState : 초기상태 - 
    initialState: {
        popularMovies: [],
        topRatedMovies: [],
        upComingMovies: []
    },

    // reducers : 액션을 처리하는 함수 
    reducers: {
        getPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        getTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        getUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        }
    }
})

export const { getPopularMovies, getTopRatedMovies, getUpComingMovies } = movieSlice.actions

export default movieSlice.reducer;