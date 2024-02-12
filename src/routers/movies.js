const express = require('express')
const routers = express.Router()
const ctrl = require('../controllers/movies')


routers.get("/", ctrl.fetchMovies)
routers.get("/search", ctrl.fetchMoviesByName)
routers.post("/", ctrl.createMovie)
routers.put("/:id", ctrl.updateMovie)
routers.delete("/:id", ctrl.deleteMovie)

module.exports = routers