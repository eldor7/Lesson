import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import HomePage from './components/HomePage'
import PortFolio from './components/PortFolio'
import Testimonial from './components/Testimonial'

const App = () => {
  return (
    <div>
      <BrowserRouter>
           <HomePage/>
           <Routes>
            {/* <Route path='home' element={<HomePage/>} /> */}
            <Route path='about' element={<AboutPage/>} />
            <Route path='portFolio' element={<PortFolio/>} />
            <Route path='testimonial' element={<Testimonial/>} />
            <Route path='contact' element={<ContactPage/>} />

           </Routes>

      
      
      </BrowserRouter>
    </div>
  )
}

export default App
