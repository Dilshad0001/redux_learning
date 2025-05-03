import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductAdd from './ProductAdd'
import ProductView from './ProductView'
import Fetch from './Fetch'
import AddtoApi from './AddtoApi'
import Todo from './Todo'
import TodoView from './TodoView'
import Counter from './Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductAdd/>
    <ProductView/>
    {/* <Fetch/> */}
    <AddtoApi/>
    <Todo/>
    <TodoView/>
    <Counter/>
    </>
  )
}

export default App
