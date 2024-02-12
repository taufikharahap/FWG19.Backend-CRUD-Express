const models = require('../models/bookings')
const controller = {}


controller.createBooking = async (req, res) => {
    try {
        const data = await models.addBooking(req.body)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

controller.fetchBookings = async (req, res) => {
    try {
        const data = await models.getBookings()
        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error)
    }
}

controller.updateBooking = async (req, res) => {
    try {
        const {paymentMethod} = req.body;
        const id = parseInt(req.params.id);

        const checkBookingId = await models.getBookingById(id);
        
        if(!checkBookingId){
            throw new Error("id booking tidak ditemukan");
        }

        const data = await models.updateBooking( paymentMethod, id);
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json(error.message)
    }
}

controller.deleteBooking = async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const checkBookingId = await models.getBookingById(id);
        
        if(!checkBookingId){
            throw new Error("id booking tidak ditemukan");
        }

        const data = await models.deletebooking(id);
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json(error.message)
    }
}


module.exports = controller