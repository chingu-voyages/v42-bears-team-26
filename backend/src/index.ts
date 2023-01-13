import * as express from 'express'

const app = express()
const PORT = 3000

app.get('/', (_, res) => {
  res.send('Health Hero backend is running! 🌈')
})

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
