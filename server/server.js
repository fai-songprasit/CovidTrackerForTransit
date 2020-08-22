const path = require('path')
const express = require('express')

const server = express()
const busRoute = require('./routes/busById')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/', busRoute)

module.exports = server
