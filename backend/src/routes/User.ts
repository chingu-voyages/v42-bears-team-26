import express = require('express')
import { dbClient } from '../db'

const UserRoute = express.Router()

UserRoute.get('/', async (_, res) => {
  const { rows: users } = await dbClient.query('select * from users')

  res.send({
    res: users,
  })
})

export default UserRoute
