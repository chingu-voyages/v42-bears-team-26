import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppLayout } from '../layouts/AppLayout'
import {
  TestResultsPage,
  MedicationPage,
  LandingPage,
  CalendarPage,
  DashboardPage,
} from '../pages'

export enum EnumRoutes {
  dashboard = '/dashboard',
  medication = '/medication',
  testResults = '/test-results',
  calendar="/calendar"
}

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route element={<AppLayout />}>
        <Route path={EnumRoutes.dashboard} element={<DashboardPage />} />
        <Route path={EnumRoutes.medication} element={<MedicationPage />} />
        <Route path={EnumRoutes.testResults} element={<TestResultsPage />} /> 
        <Route path={EnumRoutes.calendar} element={<CalendarPage />} />

      </Route>

    </Routes>
  )
}
