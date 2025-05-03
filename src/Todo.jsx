import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'

function Todo() {
    const [input,setInput]=useState('')
    const dispatch=useDispatch()

    const handleInput=()=>{
        dispatch(addTodo(input))
        setInput('')
        
    }

  return (
    <div>
      <h1>todo list</h1>
      <input onChange={(e)=>setInput(e.target.value)} placeholder='enter task' value={input} type='text'/>
      <button onClick={handleInput}>Add</button>
    </div>
  )
}

export default Todo
