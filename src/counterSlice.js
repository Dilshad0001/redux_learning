import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    count:0
}


const counterSlice=createSlice({
    name:'counter',
    initialState:INITIAL_STATE,
    reducers:{
        increase:(state)=>{
            state.count+=1
        },
        decrease:(state)=>{
            state.count-=1
        }
    }
})



export default counterSlice.reducer;
export const {increase,decrease}=counterSlice.actions