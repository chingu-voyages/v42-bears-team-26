import express = require('express')
import testMock from '../mocks/testMock'

const TestResultRoute = express.Router()

TestResultRoute.get('/', (_, res) => {
  res.send({
    res: testMock,
  })
})

export default TestResultRoute
