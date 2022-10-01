const express = require('express')
const http = require('http')
const { Server } = require('socket.io')
const dotenv = require('dotenv').config()
const chalk = require('chalk')

const port = process.env.PORT || 5000
const node_env = (process.env.NODE_ENV || "production").toLocaleUpperCase()
const app_name = (process.env.APP_NAME)

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
    }
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))

if (node_env == "DEVELOPMENT")
{
    app.use((req, res, next) => {
        console.log("(%s)\tRequest URL: %s", req.method, req.originalUrl)
        next()
    })
}

// app routes
// GET /chat
// app.get('/chat', (req, res) => {
//     res.json({status: "connected to server"})
// })
// POST /chat
// app.post('/chat', (req, res) => {
//     console.log('POST REQUEST ',  req.body)
//     res.status(200).send(req.body)
// })

// socket io functions
// connect
io.on('connection', (socket) => {
    console.log('a user connected')
        
    // message
    socket.on('message', (msg) => {
        console.log('message: ' + msg.message)
    })

    // join room
    socket.on('join', () => {
        console.log('a user joined')
    })

    // leave room
    socket.on('leave', () => {
        console.log('a user left')
    })

    // disconnect
    socket.on('disconnect', () => {
        console.log('a user disconnected')
    })
})

// please for the love of christ use `server` not `app`
server.listen(port, () => {
    console.log("[%s] started on port:%s (%s)", chalk.cyan(app_name), chalk.green(port.toString()), chalk.red(node_env))
})