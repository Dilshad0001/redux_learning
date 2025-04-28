import React from 'react'
import {useSelector} from 'react-redux'

function ProductView() {
    const {produ}=useSelector(state=>state.product) //product-> name of reducer fun, produ->initial state variable name
    
  return (
    <div>
        {produ.map((item,index)=>{
            return <h1 key={index}>{item.name}</h1>
        })}
      
    </div>
  )
}

export default ProductView
