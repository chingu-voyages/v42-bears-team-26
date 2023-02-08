import React, { useContext, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { BACKEND_URL } from '../constants'

type TAppContent = {
  authToken?: string
  error?: string
  success?: string
  handleSignIn: (email: string, password: string) => Promise<void>
  handleSignOut: () => void
  handleRegister: (
    firstname: string,
    lastname: string,
    email: string,
    password: string
  ) => Promise<void>
  clearError: () => void
  clearSuccess: () => void
}

const AppContext = React.createContext({} as TAppContent)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [authToken, setAuthToken] = useState<string>()
  const [error, setError] = useState<string>()
  const [success, setSuccess] = useState<string>()

  const handleSignIn = async (email: string, password: string) => {
    try {
      const res = await axios.post(`${BACKEND_URL}/auth/login`, {
        email,
        password,
      })

      if (res.data.token) {
        setAuthToken(res.data.token)
      }
    } catch (e) {
      setError('Error logging in.')
    }
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
    }
  }

  const handleSignOut = () => setAuthToken(undefined)

  const clearError = () => setError(undefined)
  const clearSuccess = () => setSuccess(undefined)

  return (
    <AppContext.Provider
      value={{
        authToken,
        success,
        error,
        handleRegister,
        handleSignIn,
        handleSignOut,
        clearError,
        clearSuccess,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)
