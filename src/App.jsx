import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './assets/layout/Layout'
import Home from './assets/pages/Home'
import Entertainment from './assets/pages/Entertainment'
import { Newsprovider } from './assets/context/Newscontext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Newsprovider>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/entertainment' element={<Entertainment/>}></Route>

      </Route>
    </Routes>
    </Newsprovider>
    </>
  )
}

export default App
