import express = require('express')

const MedicationRoute = express.Router()

MedicationRoute.get('/', (_: any, res: any) => {
  res.send({
    res: [
      {
        name: 'medicationA',
        timeScheduled: '17/01/2023',
        timeTaken: '19/01/2023',
      },
    ],
  })
})
export default MedicationRoute
