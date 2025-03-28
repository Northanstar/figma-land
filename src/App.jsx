import React from 'react'
import Navbar from './Components/Navbar'
import Hero from '../src/Components/Hero'
import Features from './Components/Features'
import Content from './Components/Content'
import Gallery from './Components/Gallery'
import Partners from './Components/Partners'
import Testimonials from './Components/Testimonials'
import Try from './Components/Try'
import Footer from './Components/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
     <Features/>
     <Content/>
     <Gallery/>
     <Partners/>
     <Testimonials/>
     <Try/>
     <Footer/>

    </div>
  )
}

export default App
