import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllProducts } from './ProductSlice';

function Fetch() {
    const dispatch=useDispatch()
    const {user}=useSelector(state=>state.product); //user ->in intial state, product -> name in reducer fun
    console.log("===",user);
    useEffect(()=>{
        dispatch(getAllProducts())
        // console.log("hhh");
        
    },[])
    
  return (
    <div>
        <h1>get data from api</h1>
        {user.map((item,index)=>(
            <h1 key={index}>{item.name}</h1>
        ))}
      
    </div>
  )
}

export default Fetch
