import express from 'express'
import morgan from 'morgan'
// Routes
import UserRoute from './Routes/User'
import TestResultRoute from './Routes/TestResult'
import MedicationRoute from './Routes/Medication'
import * as swaggerDocument from '../src/swagger.json'
import * as swaggerUI from 'swagger-ui-express'

const app = express()
const PORT = 4000

app.use(morgan('combined'))

app.get('/', (_, res) => {
  res.send({ res: 'Health Hero backend is running! 🌈' })
})

app.use('/user', UserRoute)
app.use('/testResult', TestResultRoute)
app.use('/medication', MedicationRoute)

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
