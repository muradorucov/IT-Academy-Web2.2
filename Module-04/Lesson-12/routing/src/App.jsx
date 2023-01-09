import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Contact from './Contact'
import About from './About'
import Home from './Home'
import Navbar from './Navbar'
import NotFound from './NotFound'
import Info from "./Info"

function App() {

  return (
    <>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about/' element={<About />}>
          <Route path='info' element={<Info />} />
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </>

  )
}

export default App
