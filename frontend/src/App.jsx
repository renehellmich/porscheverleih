import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={''}/> {/* Startseite */}
        <Route path='/buchungen' element={''} /> {/* Buchungen */}
        <Route path='/buchungen/:id' element={''} /> {/* Buchunge Details */}
        <Route path='/autos' element={''} /> {/* Autos */}
        <Route path='/autos/:id' element={''} /> {/* Auto Details */}
      </Routes>
    </>
  )
}

export default App
