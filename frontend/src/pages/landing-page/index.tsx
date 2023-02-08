import React, { useState } from 'react'
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
import { ErrorModal } from '../../components/ErrorModal'
import { SuccessModal } from '../../components/SuccessModal'
import { useAppContext } from '../../contexts/main'

const LandingPage = () => {
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)

  const {
    error,
    success,
    handleRegister,
    handleSignIn,
    clearError,
    clearSuccess,
  } = useAppContext()

  const onSignIn = (...args: [email: string, password: string]) => {
    setShowSignInModal(false)
    handleSignIn(...args)
  }

  const onRegister = (
    ...args: [
      firstname: string,
      lastname: string,
      email: string,
      password: string
    ]
  ) => {
    setShowRegisterModal(false)
    handleRegister(...args)
  }

  return (
    <div className="font-roboto grid grid-cols-1 grid-rows-10 h-screen">
      {error && <ErrorModal onClose={clearError} error={error} />}
      {success && <SuccessModal message={success} onClose={clearSuccess} />}
      <SignInModal
        show={showSignInModal}
        onSignIn={onSignIn}
        onClose={() => setShowSignInModal(false)}
      />
      <RegisterModal
        show={showRegisterModal}
        onRegister={onRegister}
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
