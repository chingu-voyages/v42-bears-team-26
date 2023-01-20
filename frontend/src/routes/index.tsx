import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage, TestResultsPage } from '../Pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/test-results" element={<TestResultsPage />} />
    </Routes>
  )
}
