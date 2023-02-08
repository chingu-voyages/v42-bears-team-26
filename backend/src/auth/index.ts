import express = require('express')
import { dbClient } from '../db'
import JWT from 'jsonwebtoken'
import { check, validationResult } from 'express-validator'
import bcrypt from 'bcrypt'
const Auth = express.Router()
const saltRounds = 10
//const secretKey: string = process.env.SECRETKEY as string
const secretKey = '=TrAAygjm1VHMYl6pjJquQxkO'

const checkEmail = async (email: string) => {
  const user = await dbClient.query(`select * from users where email =$1`, [
    email,
  ])
  if (user.rowCount === 0) return false
  return user.rows[0]
}

// create new user

Auth.post(
  '/register',
  [
    check('email', 'Please input a valid email').isEmail(),
    check(
      'password',
      'Please input a password with a min length of 6'
    ).isLength({ min: 6 }),
  ],
  async (req: express.Request, res: express.Response) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({
        errors: errors.array(),
      })
    }
    const { email, firstname, lastname, telephone, password, role } = req.body

    try {
      const newUser = await checkEmail(email)
      const hashedPassword = await bcrypt.hash(password, saltRounds)

      if (!newUser) {
        const results = await dbClient.query(
          `INSERT INTO users (firstname,lastname,email,telephone,password,role) VALUES ($1, $2, $3, $4, $5,$6) returning *`,
          [firstname, lastname, email, telephone, hashedPassword, role]
        )
        return res.send(results.rows[0])
      } else {
        return res.json({
          errors: [
            {
              msg: 'User already exist',
            },
          ],
        })
      }
    } catch (e) {
      console.log(e)
      return res.status(401).json({
        errors: [
          {
            msg: 'Unable to create new user',
          },
        ],
      })
    }
  }
)

Auth.post('/login', async (req: express.Request, res: express.Response) => {
  const { email, password } = req.body
  try {
    const user = await checkEmail(email)
    if (user) {
      const hashedPassword = await bcrypt.compare(password, user.password)
      if (hashedPassword) {
        // down below in JWT.sign, we are passing the all user info to be included in the new token
        // we can pass only the role or email or any thing related to the user.
        const accessToken = await JWT.sign({ ...user }, secretKey, {
          expiresIn: 360000,
        })

        res.json({ ...user, token: accessToken })
      } else {
        res.status(401).json({
          errors: [
            {
              msg: 'Invalid Password',
            },
          ],
        })
      }
    } else {
      res.status(401).json({
        errors: [
          {
            msg: 'User not found',
          },
        ],
      })
    }
  } catch (error) {
    console.log(error)
  }
})

export default Auth
