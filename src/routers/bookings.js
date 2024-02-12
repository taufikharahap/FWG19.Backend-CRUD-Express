const express = require('express')
const routers = express.Router()
const ctrl = require('../controllers/bookings')


routers.get("/", ctrl.fetchBookings)
routers.post("/", ctrl.createBooking)
routers.put("/:id", ctrl.updateBooking)
routers.delete("/:id", ctrl.deleteBooking)

module.exports = routers