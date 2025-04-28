import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addNewProduct } from './ProductSlice'

function ProductAdd() {
    const [input,setInput]=useState('')
    const dispatch=useDispatch()
    // console.log("ggggg--",input);

    const handleInput=()=>{
        dispatch(addNewProduct({name:input}))
    }
    
  return (
    <div>
      <input type="text" onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handleInput}>Add</button>            
    </div>
  )
}

export default ProductAdd




