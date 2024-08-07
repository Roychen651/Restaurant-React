import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Dishes from './Components/Dishes'
import About from './Components/About'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>

      <Hero />
      <Navbar />
      <Dishes />
      <About />
      
    </main>
  )
}

export default App