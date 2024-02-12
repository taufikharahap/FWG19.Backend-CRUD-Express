const models = {}
const db = require('../configs/db')


models.addMovie = ({ movieName, genre, releaseDate, directedBy, casts, duration, synopsis }) => {
    return new Promise((resolve, reject) => {
        db.query(`
                insert into public.movies(movie_name, genre, release_date, directed_by, casts, duration, synopsis) 
                values($1, $2, $3, $4, $5, $6, $7)`, [movieName, genre, releaseDate, directedBy, casts, duration, synopsis])
            .then((res) => {
                resolve(`Movie ${movieName} berhasil ditambahkan`)
            }).catch(err => {
                reject(err)
            })
    })
}

models.getMovies = (sort_name = 'asc', sort_date ='asc') => {
    if(sort_name == 'desc'){
        return new Promise((resolve, reject) => {
            db.query(`SELECT movie_name, release_date FROM public.movies
                        order by movie_name desc`)  
            .then((res) => {
                resolve(res.rows)
            }).catch(err => {
                reject(err)
            })
        })
    }else if(sort_date == 'desc'){
        return new Promise((resolve, reject) => {
            db.query(`SELECT movie_name, release_date FROM public.movies
                        order by release_date desc, movie_name asc`)
            .then((res) => {
                resolve(res.rows)
            }).catch(err => {
                reject(err)
            })
        })
    }else{
        return new Promise((resolve, reject) => {
            db.query(`SELECT movie_name, release_date FROM public.movies
                        order by movie_name asc, release_date desc`)
            .then((res) => {
                resolve(res.rows)
            }).catch(err => {
                reject(err)
            })
        })
    }
}


models.getMoviesByName = (name) => {
    return new Promise((resolve, reject) => {
        db.query(`select movie_name, release_date from public.movies
                    where movie_name like $1
                    order by movie_name ASC`, [`%${name}%`])
        .then((res) => {
            resolve(res.rows)
        }).catch(err => {
            reject(err)
        })
    })
}

models.getMovieById = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`select * from public.movies
                    where movie_id= $1`, [id])
        .then((res) => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

models.updateMovie = ({ movieName, genre, releaseDate, directedBy, casts, duration, synopsis }, id) => {
    return new Promise((resolve, reject) => {
        db.query(`UPDATE public.movies 
                    SET movie_name = $1, genre = $2, release_date = $3, directed_by = $4, casts = $5, duration = $6, synopsis = $7  
                    WHERE movie_id  = $8`, [movieName, genre, releaseDate, directedBy, casts, duration, synopsis, id])
        .then((res) => {
            resolve('Data movie berhasi diubah');
            console.log(res)
        }).catch(err => {
            reject(err)
        })
    })
}

models.deleteMovie = (id) => {
    return new Promise((resolve, reject) => {
        db.query(`DELETE FROM movies 
        WHERE movie_id = $1`, [id])
        .then((res) => {
            resolve('Movie berhasi dihapus')
        }).catch(err => {
            reject(err)
        })
    })
}




module.exports = models