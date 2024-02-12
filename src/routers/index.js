const express = require('express')
const routers = express.Router()

const movieService = require('./movies')
const scheduleService = require('./schedules')
const bookingService = require('./bookings')


routers.use("/movies", movieService)
routers.use("/schedules", scheduleService)
routers.use("/bookings", bookingService)

module.exports = routers