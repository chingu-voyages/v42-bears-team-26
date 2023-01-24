import React from 'react'
import { AppRoutes } from './routes'
import img from '../assets/emoji.png'

export const App = () => {
  return (
    <div>
      <AppRoutes />
      <img src={img} width={50} />
    </div>
  )
}
