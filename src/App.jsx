import React from 'react'
import BackgroundVideo from './components/BackgroundVideo'
import Navbar from './components/NavBar'
import Hero from './section/Hero'
import About from './section/About'
import Skills from './section/Skills'

const App = () => {
  return (
    <div className=''>
      {/* <BackgroundVideo /> */}
      <Hero />
      <About />
      <Skills />
    </div>
  )
}

export default App