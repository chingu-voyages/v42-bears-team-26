import express = require('express')
import { dbClient } from '../db'
import { checkAuth } from '../middleware/checkAuth'
const MedicationRoute = express.Router()
// Passing checkAuth as middlewaare here, in this case checkAuth will verify the token sended by the user and inside this middleware we are able to take the payload(user info) from the toke

MedicationRoute.get('/', checkAuth, async (_, res) => {
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
