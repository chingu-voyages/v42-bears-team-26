import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { TitleBar } from '../components/TitleBar'
import { EnumRoutes } from '../routes'

const pageTitles: { [key in EnumRoutes]: string } = {
  '/dashboard': 'Dashboard',
  '/medication': 'Medication tracking',
  '/test-results': 'Documents',
  '/calendar': 'Calendar',
}

const mapRouteToPageTitle = () => {
  const location = useLocation()
  return pageTitles[location.pathname as EnumRoutes]
}

export const AppLayout = () => {
  return (
    <div className="flex w-screen">
      <div className="grow w-40">
        <div>
          <Link to="dashboard">Dashboard</Link>
        </div>
        <div>
          <Link to="medication">Medication</Link>
        </div>
        <div>
          <Link to="test-results">Test results</Link>
        </div>
        <div>
          <Link to="/calendar">Calendar</Link>
        </div>
      </div>
      <div className="w-full">
        <TitleBar
          title={mapRouteToPageTitle()}
          message={`Hi Sarah welcome to your HealthHero ${mapRouteToPageTitle()}`}
        />
        <Outlet />
      </div>
    </div>
  )
}
