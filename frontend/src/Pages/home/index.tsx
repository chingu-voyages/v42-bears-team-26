import React from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../medication/components'

export const HomePage = () => {
  return (
    <>
      <h2>Home page</h2>
      <div>
        <Link className="font-bold hover:text-green-500" to="/test-results">
          Test results page
        </Link>
        <Link className="font-bold hover:text-green-500" to="/medication">
          Medication page
        </Link>
        <Form title="Add medication" />
      </div>
      <div>
        <Link className="font-bold hover:text-green-500" to="/medication">
          Medication Tracker
        </Link>
      </div>
    </>
  )
}
