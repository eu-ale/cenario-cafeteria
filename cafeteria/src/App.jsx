import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Cabecalho from './Component/Cabecalho.jsx'
import ListProd from './Component/CoffeeList.jsx'
import Footer from './Component/Rodape.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Cabecalho />
      <ListProd />
      <Footer />
    </>
  )
}

export default App
