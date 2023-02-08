import express = require('express')
import { dbClient } from '../db'

const ReminderRoute = express.Router()

ReminderRoute.get('/', async (_, res) => {
  const { rows: results } = await dbClient.query(
    `select medicines.med_id,  med_reminder.reminder_id, medicines.med_name,
    med_reminder.reminder_time, med_reminder.is_current, 
	jsonb_path_query(med_taken_data, '$.tracker_data[*] ? (@.date == "2023-02-08")') as today_tracker
	FROM med_reminder
	inner join medicines
    on med_reminder.med_id = medicines.med_id
    WHERE med_reminder.is_current = true
	ORDER BY med_reminder.reminder_time
    `)

  res.send({
    res: results,
  })
})

export default ReminderRoute
