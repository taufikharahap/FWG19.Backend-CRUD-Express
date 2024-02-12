const models = require('../models/movies')
const controller = {}


controller.createMovie = async (req, res) => {
    try {
        const data = await models.addMovie(req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

controller.fetchMovies = async (req, res) => {
    try {

        const {sort_name, sort_date} = req.query;

        const data = await models.getMovies(sort_name, sort_date)
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error.message)
    }
}

controller.fetchMoviesByName = async (req, res) => {
    try {
        const {name} = req.query;
        const data = await models.getMoviesByName(name);
        res.status(200).json(data)
        return;
        
    } catch (error) {
        res.status(500).json(error.message)
    }
}

controller.updateMovie = async (req, res) => {
    try {
        // const {name} = req.body;
        const id = parseInt(req.params.id);

        const checkMovieId = await models.getMovieById(id);
        
        if(!checkMovieId.rowCount){
            throw new Error(`id movie tidak ditemukan`)
        }

        const data = await models.updateMovie( req.body, id);
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json(error.message)
    }
}

controller.deleteMovie = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const checkMovieId = await models.getMovieById(id);
        
        if(!checkMovieId){
            res.send(`id movie tidak ditemukan`)
        }

        const data = await models.deleteMovie(id);
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = controller