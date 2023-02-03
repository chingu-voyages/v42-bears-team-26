//import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'
import Reviews from './components/BottomHalfH/Reviews'
import ContactUs from './components/BottomHalfH/ContactUs'
import Footer_1 from './components/BottomHalfH/Footer_1'
import Footer_2 from './components/BottomHalfH/Footer_2'

function LandingPage() {
  return (
    <div className="font-roboto grid grid-cols-1 grid-rows-10 h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <Reviews />
      <ContactUs />
      <Footer_1 />
      <Footer_2 />
    </div>
  )
}

export { LandingPage }
