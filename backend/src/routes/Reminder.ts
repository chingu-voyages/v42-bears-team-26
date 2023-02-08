import express = require('express')
import { dbClient } from '../db'

const ReminderRoute = express.Router()

// const reminderList = [
//     {
//       medicineName: 'Medicine A',
//       time: '2:30',
//       taken: false,
//     },

ReminderRoute.get('/', async (_, res) => {
  const { rows: results } = await dbClient.query('select * from med_reminder;')

  res.send({
    res: results,
  })
})

export default ReminderRoute