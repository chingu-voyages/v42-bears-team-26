import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'

function Home() {
  return (
    <div className="font-roboto grid grid-cols-1 grid-rows-10 h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
    </div>
  )
}

export default Home
