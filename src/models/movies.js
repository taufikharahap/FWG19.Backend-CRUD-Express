const models = {}
const db = require('../configs/db')


models.addData = ({ movieName, genre, releaseDate, directedBy, casts, duration, synopsis }) => {
    return new Promise((resolve, reject) => {
        db.query(`
                INSERT INTO public.product(movie_name, genre, release_date, directed_by, casts, duration, synopsis) 
                VALUES($1, $2, $3, $4, $5, $6, $7)`, [movieName, genre, releaseDate, directedBy, casts, duration, synopsis])
            .then((res) => {
                resolve(res.rowCount)
            }).catch(err => {
                reject(err)
            })
    })
}

models.getData = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from public.movies').then((res) => {
            resolve(res.rows)
        }).catch(err => {
            reject(err)
        })
    })
}


module.exports = models