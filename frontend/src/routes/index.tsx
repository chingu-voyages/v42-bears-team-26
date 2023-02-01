import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {
  HomePage,
  TestResultsPage,
  MedicationPage,
  LandingPage,
  CalendarPage,
} from '../Pages'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/medication" element={<MedicationPage />} />
      <Route path="/test-results" element={<TestResultsPage />} />
      <Route path="/calendar" element={<CalendarPage />} />
    </Routes>
  )
}
