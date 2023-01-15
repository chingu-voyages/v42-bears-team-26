import * as express from 'express'
import * as morgan from 'morgan'

const app = express()
const PORT = 4000

app.use(morgan('combined'))

app.get('/', (_, res) => {
  res.send({ res: 'Health Hero backend is running! 🌈' })
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
