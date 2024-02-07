const express = require('express')
const routers = express.Router()
const ctrl = require('../controllers/products')


routers.get("/", ctrl.fetch)
routers.post("/", ctrl.create)

module.exports = routers