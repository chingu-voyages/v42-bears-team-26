import express = require('express')
import { dbClient } from '../db'

const TestResultRoute = express.Router()

TestResultRoute.get('/', async (_, res) => {
  const { rows: results } = await dbClient.query('select * from test_results')

  res.send({
    res: results,
  })
})

export default TestResultRoute
