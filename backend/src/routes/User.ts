import express = require('express')
import userMock from '../mocks/userMock'

const UserRoute = express.Router()

UserRoute.get('/', (_, res) => {
  res.send({
    res: userMock,
  })
})

export default UserRoute
