import express = require('express')
import medicationMock from '../mocks/medicationMock'

const MedicationRoute = express.Router()

MedicationRoute.get('/', (_, res) => {
  res.send({
    res: medicationMock,
  })
})

export default MedicationRoute
