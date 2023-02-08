import React from 'react'
import { useAppContext } from './contexts/main'
import { LandingPage } from './pages'
import { AppRoutes } from './routes'

export const App = () => {
  const { authToken } = useAppContext()

  if (authToken) return <AppRoutes />

  return <LandingPage />
}
