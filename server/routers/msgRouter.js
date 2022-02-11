const express = require('express')
const { createMsg } = require('../controller/msgController')

const msgRouter = express.Router()

msgRouter.post('/', createMsg)

module.exports = msgRouter