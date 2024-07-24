import Footer from '@/components/Footer'
import Blog from '@/pagecomponents/Blog'
import Contact from '@/pagecomponents/Contact'
import Hero from '@/pagecomponents/Hero'
import NavBar from '@/pagecomponents/NavBar'
import SerSection from '@/pagecomponents/SerSection'

import Transforming from '@/pagecomponents/Transforming'
import React from 'react'


const page = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Transforming/>
      <SerSection/>
      <Contact/>
      <Blog/>
      <Footer/>
      
    </div>
  )
}

export default page