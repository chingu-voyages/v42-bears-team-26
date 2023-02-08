import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { TitleBar } from '../components/TitleBar'
import { EnumRoutes } from '../routes'
import Navigationbar from '../components/Navigationbar'

const pageTitles: { [key in EnumRoutes]: string } = {
  '/': 'Dashboard',
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
    <div className="grid grid-cols-1 grid-rows-9 lg:grid-cols-5 lg:grid-rows-1 w-screen">
      <div className="col-span-1 row-span-1 border-r-2 border-gray">
        <Navigationbar />
      </div>
      <div className="col-span-1 row-span-8 lg:col-span-4 lg:row-span-1">
        <TitleBar
          title={mapRouteToPageTitle()}
          message={`Hi Sarah welcome to your HealthHero ${mapRouteToPageTitle()}`}
        />
        <Outlet />
      </div>
    </div>
  )
}
