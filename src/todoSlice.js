import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE={
    todos:[]
}

const todoSlice=createSlice({
    name:"todo",
    initialState:INITIAL_STATE,
    reducers:{
        addTodo:(state,action)=>{            
            state.todos.push({id:Date.now(),text:action.payload})
        },
        removeTodo:(state,action)=>{
            console.log("remoovveee reducer",action.payload);
            console.log("items-before--",state.todos);
            
            
            state.todos = state.todos.filter(item => item.id !== action.payload)
            console.log("items-after--",state.todos);
        }
    }
})

export default todoSlice.reducer;
export const {addTodo,removeTodo}=todoSlice.actions;