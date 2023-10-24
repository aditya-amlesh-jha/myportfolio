import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar.jsx'
import Home from './Home/Home.jsx'
import NotFound from './NotFound/NotFound.jsx'
import Footer from './components/Footer/Footer.jsx'
import Contact from './Contact/Contact.jsx'
import Experience from './Experience/Experience.jsx'

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
