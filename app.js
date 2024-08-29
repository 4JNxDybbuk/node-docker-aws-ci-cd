const express = require('express')
const userData = require('./user.json')

const server = express()

server.get('/api', (req, res) => {
    res.send("<h1>Server running..</h1>")
})


server.get('/api/users', (req, res) => {
    res.json({
        mesage: "User data fetching...",
        data: userData
    })
})



server.listen(9500, () => console.log("Server started!!"))