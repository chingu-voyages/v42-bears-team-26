import express = require('express')
const TestResultRoute = express.Router()

TestResultRoute.get('/', (_: any, res: any) => {
  res.send({
    res: [
      {
        name: 'testA',
        description: 'this is a test description ',
        date: '19/01/2023',
      },
    ],
  })
})
//module.exports = TestResultrouter
export default TestResultRoute
