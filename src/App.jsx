import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Test from './components/Test'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonials/Testimonial'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title para="Our Program" head="What We Offer" />
        <Programs />
        <About />

        <Title para="Gallery" head="Campus Photos" />
        <Campus />
        <Title para="Testimonials" head="What Student Says" />
        <Testimonial />

        <Title para="Contact Us" head="Get In Touch" />
        <Contact />

        <Footer />



      </div>

    </div>
  )
}

export default App
