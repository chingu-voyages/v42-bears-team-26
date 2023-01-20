import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <h2>Home page</h2>
      <div>
        <Link className="font-bold hover:text-green-500" to="/test-results">
          Test results page
        </Link>
      </div>
    </>
  )
}
