import {createSlice} from '@reduxjs/toolkit'

const INITIAL_STATE={
    produ:[
        {name:"tv"},
        {name:"bag"}
    ]
}

const ProductSlice=createSlice({
    name:"product",
    initialState:INITIAL_STATE,
    reducers:{
        addNewProduct:(state,action)=>{
            state.produ=[...state.produ,action.payload]
            // console.log("===",state.produ);
            
        }
        
    }
})


export default ProductSlice.reducer
export const {addNewProduct}=ProductSlice.actions