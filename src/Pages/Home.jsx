import React from 'react'
import Content from '../Components/Content'
import Features from '../Components/Features'
import Gallery from '../Components/Gallery'
import Hero from '../Components/Hero'
import Partners from '../Components/Partners'
import Testimonials from '../Components/Testimonials'
import Try from '../Components/Try'


const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
        <Content/>
        <Gallery/>
        <Partners/>
        <Testimonials/>
        <Try/>
    </div>
  )
}

export default Home
