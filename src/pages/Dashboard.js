import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import ChatButton from '../components/ChatButton'
import Footer from '../components/Footer'
import AboutUs from '../components/dashboard/AboutUs'
import MenuSection from '../components/dashboard/MenuSection'
import ContactSection from '../components/dashboard/ContactSection'

const Dashboard = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <MenuSection/>
      <ContactSection/>
      <Footer/>
      <ChatButton/>
    </div>
  )
}

export default Dashboard