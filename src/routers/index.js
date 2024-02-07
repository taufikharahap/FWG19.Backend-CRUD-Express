const express = require('express')
const routers = express.Router()

const userService = require('./users')
const prodService = require('./products')


routers.use("/users", userService)
routers.use("/products", prodService)

module.exports = routers