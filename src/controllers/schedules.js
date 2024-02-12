const models = require('../models/schedules')
const modelsMovies = require('../models/movies')
const controller = {}


controller.fetchSchedules = async (req, res) => {
    try {
        const data = await models.getSchedules()
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error)
    }
}

controller.createSchedule = async (req, res) => {
    try {
        const {movieId} = req.body;

        const checkMovieId = await modelsMovies.getMovieById(movieId);

        if(!checkMovieId){
            throw new Error(`id movie ${movieId} tidak ditemukan`);    
        }

        const data = await models.addSchedule(req.body);
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error.message)
    }
}

controller.updateSchedule = async (req, res) => {
    try {
        const {date} = req.body;
        const id = parseInt(req.params.id);

        const checkScheduleId = await models.getScheduleById(id);
        
        if(!checkScheduleId){
            throw new Error(`id schedule: ${id} tidak ditemukan`);
        }

        const data = await models.updateSchedule( date, id);
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json(error.message)
    }
}

controller.deleteSchedule = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const checkScheduleId = await models.getScheduleById(id);
        
        if(!checkScheduleId){
            throw new Error(`id schedule: ${id} tidak ditemukan`);
        }

        const data = await models.deleteSchedule(id);
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = controller