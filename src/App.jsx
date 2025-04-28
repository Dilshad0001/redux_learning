import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ProductAdd from './ProductAdd'
import ProductView from './ProductView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductAdd/>
    <ProductView/>
    </>
  )
}

export default App
