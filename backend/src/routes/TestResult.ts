import express = require('express')
import { dbClient } from '../db'
import { checkAuth } from '../middleware/checkAuth'

const TestResultRoute = express.Router()

TestResultRoute.get('/', checkAuth, async (_, res) => {
  const { rows: results } = await dbClient.query('select * from test_results')

  res.send({
    res: results,
  })
})

export default TestResultRoute
