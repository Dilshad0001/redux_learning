import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function AddtoApi() {
    const [input,setInput]=useState()
    const dispatch=useDispatch()
    const handleInput=()=>{
        dispatch(addData({name:input}))
    }
  return (
    <div>
      <input type="text" onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handleInput}>Add</button>
    </div>
  )
}

export default AddtoApi
