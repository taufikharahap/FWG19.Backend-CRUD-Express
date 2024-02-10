const models = require('../models/movies')
const controller = {}


controller.create = async (req, res) => {
    try {
        const data = await models.addData(req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}

controller.fetch = async (req, res) => {
    try {
        const data = await models.getData()
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error)
    }
}


module.exports = controller