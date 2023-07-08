import React from 'react'
import Home from '../src/components/Home'
import About from '../src/components/About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Vans from '../src/components/Vans'
import VansDetails from '../src/components/VansDetails'

import './server'

export default function App(){
  return (
    <BrowserRouter>
      <header>
        <Link className="site-logo" to="/">#VanLife</Link>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
        <Route path="/vans/:id" element={<VansDetails />} />
      </Routes>
    </BrowserRouter>
  )
}