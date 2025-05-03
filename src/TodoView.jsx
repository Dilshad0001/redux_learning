import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from './todoSlice';

function TodoView() {
    const {todos}=useSelector(state=>state.todo)
    const dispatch=useDispatch()
    console.log('todos',todos);
    
  return (
    <div>
      <h1>todo list view</h1>
      <ul>
      {todos.map((item, index)=>(
        <li key={index}>{item.text}
        <button onClick={()=>dispatch(removeTodo(item.id))}>X</button>
        </li>
        
      ))}
      </ul>
    </div>
  )
}

export default TodoView
