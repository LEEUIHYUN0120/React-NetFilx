//  npm i react-redux @reduxjs/toolkit
import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice'

const store = configureStore({
    reducer : {
        movies : movieReducer
    }
})

export default store;