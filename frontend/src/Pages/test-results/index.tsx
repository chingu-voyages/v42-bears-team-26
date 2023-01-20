import React from 'react'
import { Link } from 'react-router-dom'

export const TestResultsPage = () => {
  return (
    <div>
      <h2>Test results page</h2>
      <Link className="font-bold hover:text-green-500" to="/">
        Go to Home page
      </Link>
    </div>
  )
}
