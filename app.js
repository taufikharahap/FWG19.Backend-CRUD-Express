const express = require('express')
const server = express()
const PORT = 8001
const routers = require('./src/routers')

server.use(express.json())
server.use(express.urlencoded({ extended: true }))
server.use(routers)


server.listen(PORT, () => {
    console.log(`server run on port ${PORT}`);
})