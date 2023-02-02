import express from 'express'
import morgan from 'morgan'
import swaggerUI from 'swagger-ui-express'
import swaggerDocument from '../src/swagger.json'
import { UserRoute, TestResultRoute, MedicationRoute } from './routes'
import { dbClient } from './db'
import { isDevelopmentMode } from './utils'
import bodyParser from 'body-parser'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 4000

const corsOptions = {
  origin: 'https://health-hero-backend.onrender.com',
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(morgan('combined'))
app.use(bodyParser.json())

app.use(cors(corsOptions))

app.use('/users', UserRoute)
app.use('/test-results', TestResultRoute)
app.use('/medications', MedicationRoute)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.get('/', cors(corsOptions), async (_, res) => {
  res.send({
    res: 'Health Hero backend is running! 🌈',
    dbConnected: Boolean(dbClient),
  })
})

app.listen(PORT, () => {
  console.log(`Server started and listening on port ${PORT} 🔥`)
  isDevelopmentMode && console.log('http://localhost:4000')
})
