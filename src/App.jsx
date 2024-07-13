import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar.jsx'
import Home from './Home/Home.jsx'
import NotFound from './NotFound/NotFound.jsx'
import Footer from './components/Footer/Footer.jsx'
import Authentication from './Authentication/Authentication.jsx'
import Experience from './Experience/Experience.jsx'
import Projects from './Projects/Projects.jsx'

function App() {

  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/authentication" element={<Authentication/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
