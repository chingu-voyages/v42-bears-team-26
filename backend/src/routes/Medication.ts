import express = require('express')
import { dbClient } from '../db'

const MedicationRoute = express.Router()

MedicationRoute.get('/', async (_, res) => {
  const { rows: results } = await dbClient.query('select * from medications;')

  res.send({
    res: results,
  })
})

MedicationRoute.post('/', async (req, res) => {
  const values = req.body

  try {
    const data = await dbClient.query(
      'insert into medications(name, dosage, frequency) values($1, $2, $3) returning *',
      [values.name, values.dosage, values.frequency]
    )
    res.send(data.rows[0])
  } catch (e) {
    console.log(e)
  }
})

export default MedicationRoute
