import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  TestResultsPage,
  MedicationPage,
  LandingPage,
  DashboardPage,
  HomePage,
} from '../pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/medication" element={<MedicationPage />} />
      <Route path="/test-results" element={<TestResultsPage />} />
    </Routes>
  )
}
