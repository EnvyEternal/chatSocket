const express = require('express')
const userRouter = require('./userRouter')
const msgRouter = require('./msgRouter.js')

const router = express.Router()

router.use('/user', userRouter)
router.use('/msg', msgRouter)

module.exports = router