import React from 'react'
import Nav from './components/nav/Nav'
import Hero from './components/hero/Hero'
import Features from './components/features/Features'
import Testimonial from './components/testimonial/Testimonial'
import Testimonial2 from './components/testimonial/testimonial2'
import End from './components/end/End'
import Footer from './components/footer/Footer'

const page = () => {
  return (
    <main>
      <Nav />
      <Hero />
      <Features />
      <Testimonial />
      <Testimonial2 />
      <End />
      <Footer />
    </main>
  )
}

export default page
