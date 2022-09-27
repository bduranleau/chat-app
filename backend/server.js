const express = require('express')
const dotenv = require('dotenv').config()
const chalk = require('chalk')
const port = process.env.PORT || 5000
const node_env = (process.env.NODE_ENV || "production").toLocaleUpperCase()
const app_name = (process.env.APP_NAME)


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

if (node_env == "DEVELOPMENT")
{
    app.use((req, res, next) => {
        console.log("(%s)\tRequest URL: %s", req.method, req.originalUrl)
        next()
    })
}

app.get('/chat', (req, res) => {
    res.json({status: "connected to server"})
})

app.post('/chat', (req, res) => {
    console.log('POST REQUEST ',  req.body)
    res.status(200).send(req.body)
})

app.listen(port, () => {
    console.log("[%s] started on port:%s (%s)", chalk.cyan(app_name), chalk.green(port.toString()), chalk.red(node_env))
})