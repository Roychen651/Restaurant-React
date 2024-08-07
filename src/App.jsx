import React from 'react'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Dishes from './Components/Dishes'
import About from './Components/About'
import Mission from './Components/Mission'
import Expertise from './Components/Expertise'
import Review from './Components/Review'

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>

      <Hero />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <Expertise />
      <Review />
      
    </main>
  )
}

export default App