import express = require('express')
import { dbClient } from '../db'

const MedicineRoute = express.Router()

MedicineRoute.get('/', async (_, res) => {
  const { rows: results } = await dbClient.query('select * from medicines;')
  res.send({
    res: results,
  })
})

MedicineRoute.post('/', async (req, res) => {
  const values = req.body
  const currentDate = new Date().toJSON().slice(0, 10)
  const default_med_taken_data = `{"tracker_data": [{
      "date": "${currentDate}",
      "is_taken": "FALSE"
    }, {
      "date": "${currentDate + 1}",
      "is_taken": "FALSE"
    }
  ]}`

  try {
    const data = await dbClient.query(
      `insert into medicines(med_name, dosage_amount, dosage_unit, frequency_amount) 
      values($1, $2, $3, $4) returning *`,
      [
        values.med_name,
        values.dosage_amount,
        values.dosage_unit,
        values.frequency_amount,
      ]
    )
    const med_id = data.rows[0].med_id
    console.log(med_id)

    const reminder_data = await dbClient.query(
      `INSERT INTO med_reminder (reminder_time, med_id, med_taken_data)
      VALUES($1, $2, $3::jsonb) RETURNING *`,
      [values.reminder_time, med_id, default_med_taken_data]
    )

    const inventory_data = await dbClient.query(
      `INSERT INTO med_inventory (amount, threshold_amount, med_id)
      VALUES($1, $2, $3) RETURNING *`,
      [values.amount, values.threshold_amount, med_id]
    )
    res.send(data.rows[0])
    console.log([data.rows[0], reminder_data.rows[0], inventory_data.rows[0]])
  } catch (e) {
    console.log(e)
  }
})

export default MedicineRoute