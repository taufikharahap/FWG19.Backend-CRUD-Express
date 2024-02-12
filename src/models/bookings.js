const models = {}
const db = require('../configs/db')


models.addBooking = ({ userId, scheduleId, amount, paymentMethod }) => {
    return new Promise((resolve, reject) => {
        db.query(`INSERT INTO booking(user_id, schedule_id, amount, payment_method) 
                    VALUES($1, $2, $3, $4)`, [userId, scheduleId, amount, paymentMethod])
            .then((res) => {
                resolve(`Data booking berhasil ditambahkan`)
            }).catch(err => {
                reject(err)
            })
    })
}

models.getBookings = () => {
    return new Promise((resolve, reject) => {
        db.query(`SELECT * FROM public.booking`)
        .then((res) => {
            resolve(res.rows)
        }).catch(err => {
            reject(err)
        })
    })
}

models.getBookingById = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`select * from public.booking
                    where booking_id= $1`, [id])
        .then((res) => {
            resolve(res.rowCount)
        }).catch(err => {
            reject(err)
        })
    })
}

models.updateBooking = (paymentMethod, id) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE public.booking SET payment_method = $1 
                    WHERE booking_id  = $2`, [paymentMethod, id])
        .then((res) => {
            resolve('Data booking berhasil diubah')
        }).catch(err => {
            reject(err)
        })
    })
}

models.deletebooking = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM booking
        WHERE booking_id = $1`, [id])
        .then((res) => {
            resolve('data booking berhasil dihapus')
        }).catch(err => {
            reject(err)
        })
    })
}




module.exports = models