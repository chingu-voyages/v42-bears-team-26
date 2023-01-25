import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'
import Section_1 from '../../components/BottomHalfH/Section_1'
import Section_2 from '../../components/BottomHalfH/Section_2'

function LandingPage() {
  return (
    <div className="font-roboto grid grid-cols-1 grid-rows-10 h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <Section_1 />
      <Section_2 />
    </div>
  )
}

export { LandingPage }
