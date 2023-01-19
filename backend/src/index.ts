import * as express from 'express'
import * as morgan from 'morgan'
import * as swaggerUI from 'swagger-ui-express'
import * as swaggerDocument from '../src/swagger.json'
import { UserRoute, TestResultRoute, MedicationRoute } from './routes'
import { dbConnect } from './db'

const app = express()
const PORT = 4000

const startBackend = async () => {
  await dbConnect()

  app.use(morgan('combined'))

  app.use('/user', UserRoute)
  app.use('/testResults', TestResultRoute)
  app.use('/medications', MedicationRoute)

  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

  app.get('/', (_, res) => {
    res.send({ res: 'Health Hero backend is running! 🌈' })
  })

  app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
}

startBackend()
