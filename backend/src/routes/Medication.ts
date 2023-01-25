import express = require('express')
import { dbClient } from '../db'

const MedicationRoute = express.Router()

MedicationRoute.get('/', async (_, res) => {
  const { rows: results } = await dbClient.query('select * from medications')

  res.send({
    res: results,
  })
})

export default MedicationRoute
