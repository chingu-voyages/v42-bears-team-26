import * as express from 'express'
import * as morgan from 'morgan'
import * as swaggerUI from 'swagger-ui-express'
import * as swaggerDocument from '../src/swagger.json'
import { UserRoute, TestResultRoute, MedicationRoute } from './routes'
import { dbClient } from './db'

const app = express()
const PORT = process.env.PORT || 4000

app.use(morgan('combined'))

app.use('/user', UserRoute)
app.use('/testResults', TestResultRoute)
app.use('/medications', MedicationRoute)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.get('/', async (_, res) => {
  res.send({
    res: 'Health Hero backend is running! 🌈',
    dbConnected: Boolean(dbClient),
  })
})

app.listen(PORT, () =>
  console.log(`Server started and listening on port ${PORT} 🔥`)
)
