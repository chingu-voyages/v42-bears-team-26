import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'

const elem = document.getElementById('root')

if (elem) {
  const root = createRoot(elem)
  root.render(<App />)
}
