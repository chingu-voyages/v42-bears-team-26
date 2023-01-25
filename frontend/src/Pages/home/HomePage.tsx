import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
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
