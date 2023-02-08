import * as express from 'express'
import JWT from 'jsonwebtoken'
//const secretKey: string = process.env.SECRETKEY as string
const secretKey = '=TrAAygjm1VHMYl6pjJquQxkO'
export const checkAuth = async (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  try {
    let token: string = req.header('authorization') as string
    token = token?.replace(/^Bearer\s/, '')
    // Check if we even have a token
    if (!token) {
      res.status(401).json({
        errors: [
          {
            msg: 'Unauthorized',
          },
        ],
      })
    } else {
      // when the token is verified we can return the payload that you have passed when you create this token
      // I did not send the payload anywhere, you can find it in the console log, down below.
      const user = await JWT.verify(token, secretKey)
      console.log(user, 'user payload')
      next() // next here means go to the next middleware which is sending the data to the user
    }
  } catch (error) {
    res.status(400).json({
      errors: [
        {
          msg: 'Invalid Token',
        },
      ],
    })
  }
}

//module.exports = checkAuth
