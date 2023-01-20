import React from 'react'
import { AppRoutes } from './routes'

export const App = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold">Health Hero frontend 🚀</h1>
      <AppRoutes />
    </div>
  )
}
