import React from 'react'
import Home from '../src/components/Home'
import About from '../src/components/About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

export default function App(){
  return (
    <BrowserRouter>
      <header>
        <Link className = 'van-life' to='/'>#VanLife</Link>
        <nav className='nav-bar'>
          <Link className = 'about-us-link'to = '/about'>AboutUs</Link>
        </nav>
      </header>
      <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = '/about' element = {<About/>}/>
      </Routes>
      <footer><p><span></span>©2023 #VANSLIFE</p></footer>
    </BrowserRouter>
  )
}