import React from 'react'
import { Link } from 'react-router-dom'
import Navigationbar from '../../components/Navigationbar'

export const HomePage = () => {
  return (
    <>
    <Navigationbar />
      <h2>Home page</h2>
      <div>
        <Link className="font-bold hover:text-green-500" to="/test-results">
          Test results page
        </Link>
        <Link className="font-bold hover:text-green-500" to="/medication">
          Medication page
        </Link>
      </div>
    </>
  )
}
