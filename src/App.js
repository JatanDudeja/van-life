import React from 'react'
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Vans from './pages/Vans/Vans'
import VansDetails from './pages/Vans/VansDetails'
import Layout from '../src/components/Layout'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans from './pages/Host/HostVans'
import HostVanDetails from './pages/Host/HostVanDetails'
import HostVanDescription from './pages/Host/HostVanDescription'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'
import AuthRequired from './components/AuthRequired'
import NotFound from './NotFound'
import Login from './pages/Login'

import './server'

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Layout/>}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VansDetails />} />
          <Route
            path="login"
            element={<Login />}
          />


          {/* Used Relative Paths here */}
          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetails />}>
                <Route index element={<HostVanDescription />} />
                <Route path="pricing" element={<HostVanPricing />} />
                <Route path="photos" element={<HostVanPhotos />} />
              </Route>
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}