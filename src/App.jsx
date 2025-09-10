import React from 'react'
// import BackgroundVideo from './components/BackgroundVideo'
// import Navbar from './components/NavBar'
import Hero from './section/Hero'
import About from './section/About'
import Skills from './section/Skills'
import Projects from './section/Projects'
import Contact from './section/Contact'

const App = () => {
  return (
    <div className=''>
      {/* <BackgroundVideo /> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App