import React, { useState } from 'react'
import axios, { AxiosError } from 'axios'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'
import Section_1 from './components/BottomHalfH/Section_1'
import Section_2 from './components/BottomHalfH/Section_2'
import Section_3 from './components/BottomHalfH/Section_3'
import Section_4 from './components/BottomHalfH/Section_4'
import { SignInModal } from '../../components/SignIn'
import { RegisterModal } from '../../components/Register'
import { BACKEND_URL } from '../../constants'
import { ErrorModal } from '../../components/ErrorModal'
import { SuccessModal } from '../../components/SuccessModal'

const LandingPage = () => {
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<string>()

  const handleSignIn = async (email: string, password: string) => {
    const res = await axios.post(`${BACKEND_URL}/auth/login`, {
      email,
      password,
    })
    console.log(res)
  }

  const handleRegister = async (
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) => {
    const payload = {
      firstname,
      lastname,
      email,
      password,
    }

    try {
      await axios.post(`${BACKEND_URL}/auth/register`, payload)
      setSuccess('🌈 Success 🌈')
    } catch (e) {
      if (e instanceof AxiosError) {
        setError(e.response?.data.errors[0].msg)
      } else {
        setError('Something went wrong with the request')
      }
      setShowRegisterModal(false)
    }
    setShowRegisterModal(false)
  }

  return (
    <div className="font-roboto grid grid-cols-1 grid-rows-10 h-screen">
      {error && (
        <ErrorModal onClose={() => setError(undefined)} error={error} />
      )}
      {success && (
        <SuccessModal message={success} onClose={() => setSuccess(undefined)} />
      )}
      <SignInModal
        show={showSignInModal}
        onSignIn={handleSignIn}
        onClose={() => setShowSignInModal(false)}
      />
      <RegisterModal
        show={showRegisterModal}
        onRegister={handleRegister}
        onClose={() => setShowRegisterModal(false)}
      />
      <Navbar
        onSignInSelect={() => setShowSignInModal(true)}
        onRegisterSelect={() => setShowRegisterModal(true)}
      />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
    </div>
  )
}

export { LandingPage }
