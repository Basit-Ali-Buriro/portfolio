import { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'


function App() {


  return (
    <>
    <div className="min-h-screen flex flex-col overflow-x-hidden">

      <Navbar/>
      <Home/>
      <Skills/>
      <Portfolio/>
      <AboutMe/>
      <Footer/>
    </div>

    </>
  )
}

export default App
