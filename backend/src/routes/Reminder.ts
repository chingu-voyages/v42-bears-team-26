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
	ORDER BY med_reminder.reminder_time`
  )
  res.send({
    res: results,
  })
})

// This endpoint will update tracker data in reminder table when users clicked taken button
// assumption: req.body will send reminder_id, {date: YYYY-MM-DD, is_taken: true}
// {
//     "reminder_id": 21,
//     "date": "2023-02-08",
//     "is_taken": "TRUE"
// }
// PS. depending on the UI and URL, whether reminder_id will be use as param (currently assume, not using param)


ReminderRoute.put('/', async (req, res) => {
    const values = req.body
    
try {
    const updateIsTaken = await dbClient.query(
        `with today_taken as (
            select ('{'||index-1||',is_taken}')::text[] as path
                from med_reminder,
                    jsonb_array_elements(med_taken_data['tracker_data']) with ordinality arr(track_date, index)
                where track_date->>'date' = '${values.date}'
                    and reminder_id = ${values.reminder_id}
        )
        update med_reminder
            set med_taken_data['tracker_data'] = 
                jsonb_set(med_taken_data['tracker_data'],today_taken.path, '${values.is_taken}', false)
            from today_taken
            where reminder_id = ${values.reminder_id} returning *`
      )

    res.send(updateIsTaken.rows[0])
} catch (e) {
    console.log(e)
}


})


export default ReminderRoute