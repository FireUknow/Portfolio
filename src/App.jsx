import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content">
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
