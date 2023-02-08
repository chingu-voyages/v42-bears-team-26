import express = require('express')
import { dbClient } from '../db'
import { checkAuth } from '../middleware/checkAuth'

const UserRoute = express.Router()

UserRoute.get('/', checkAuth, async (_, res) => {
  const { rows: users } = await dbClient.query('select * from users')

  res.send({
    res: users,
  })
})

export default UserRoute
