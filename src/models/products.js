const models = {}
const db = require('../configs/db')


models.addData = ({ name, price, image }) => {
    return new Promise((resolve, reject) => {
        db.query(`
                INSERT INTO public.product(product_name, price, image) 
                VALUES($1, $2, $3)`, [name, price, image])
            .then((res) => {
                resolve(res.rowCount)
            }).catch(err => {
                reject(err)
            })
    })
}

models.getData = () => {
    return new Promise((resolve, reject) => {
        db.query('select * from public.product').then((res) => {
            resolve(res.rows)
        }).catch(err => {
            reject(err)
        })
    })
}


module.exports = models