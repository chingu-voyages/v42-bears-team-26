import React from 'react'
//import Navbar from './components/Navbar'
//import HeroSection from './components/HeroSection'
//import FeaturesSection from './components/FeaturesSection'
import Section_1 from '../../components/BottomHalfH/Section_1'
//import Section_2 from '../../components/Section_2'
//import Section_3 from '../../components/Section_3'
//import Section_4 from '../../components/Section_4'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="font-roboto grid grid-cols-1 grid-rows-10 h-screen">
      <Section_1 />
      <div>
        <Link className="font-bold hover:text-green-500" to="/test-results">
          Test results page
        </Link>
      </div>
    </div>
  )
}

export default Home
