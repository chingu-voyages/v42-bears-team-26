import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { TestResultsPage } from '../Pages/test-results'
import HomePage from '../Pages/home/HomePage'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test-results" element={<TestResultsPage />} />
    </Routes>
  )
}
