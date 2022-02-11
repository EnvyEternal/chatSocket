const express = require('express')
const { userCreate } = require('../controller/userController')

const userRouter = express.Router()

userRouter.post('/', userCreate)

module.exports = userRouter