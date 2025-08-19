import React from 'react'
import BackgroundVideo from './components/BackgroundVideo'
import Navbar from './components/NavBar'
import Hero from './section/Hero'
import About from './section/About'

const App = () => {
  return (
    <div className=''>
      {/* <BackgroundVideo /> */}
      <Hero />
      <About />
    </div>
  )
}

export default App