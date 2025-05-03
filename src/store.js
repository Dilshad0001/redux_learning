import {configureStore} from '@reduxjs/toolkit'
import productReducer from './ProductSlice'
import todoReducer from "./todoSlice"
import counterReducer from "./counterSlice"

export const store=configureStore({
    
    reducer:{
        product:productReducer,
        todo:todoReducer,
        counter:counterReducer,
    }  
})