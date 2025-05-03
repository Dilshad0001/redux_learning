import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increase } from './counterSlice'

function Counter() {
    const {count}=useSelector((state)=>state.counter)
    const dispatch=useDispatch()

const add=()=>{
    dispatch(increase())
}

const reduce=()=>{
    dispatch(decrease())
}

  return (
    <div>
      <h1>counter page</h1>
      <h1>count:{count} </h1>
      <button onClick={add}>+</button>
      <button onClick={reduce}>-</button>
    </div>
  )
}

export default Counter
