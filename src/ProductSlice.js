import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const INITIAL_STATE={
    produ:[
        {name:"tv"},
        {name:"bag"}
    ],
    user:[],
    loading:false,
    error:null

}

// fetch Api

export const getAllProducts=createAsyncThunk("getalluser/products",async(_,{rejectWithValue})=>{
    try {
        const {data}=await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log("jjj", data);
        return data
        
    } catch (error) {
        return rejectWithValue(
            error.response ? error.response.data.message :error.message
        )
    }
    
})



const ProductSlice=createSlice({
    name:"product",
    initialState:INITIAL_STATE,
    reducers:{
        addNewProduct:(state,action)=>{
            state.produ=[...state.produ,action.payload]
            // console.log("===",state.produ);     
        }
        
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending,(state,action)=>{
            state.loading=true
        })
        .addCase(getAllProducts.fulfilled,(state,action)=>{
            state.loading=false;
            
            state.user=action.payload
            console.log("kkk",action.payload);


        })
        .addCase(getAllProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;

        })
    }
})


export default ProductSlice.reducer
export const {addNewProduct}=ProductSlice.actions