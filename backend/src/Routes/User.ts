import express = require('express')
const UserRoute = express.Router()

UserRoute.get('/', (_: any, res: any) => {
  res.send({
    res: [
      {
        id: 123,
        firstName: 'John',
        lastName: 'Deo',
        email: 'JohnDeo@gmail.com',
        phone: '304858585858',
      },
    ],
  })
})
//module.exports = userRouter
export { express }
export default UserRoute
