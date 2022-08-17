const express = require('express')
const cors = require('cors')
const fileupload = require('express-fileupload')

// === Improved Security ===
const xss = require('xss-clean')
const mongoSanitize = require('express-mongo-sanitize')

const app = express()

// === DB Connection ===
const testRoute=require('./routes/test.routes')

// === CORS Enabled ===
app.use(cors())
app.use("/api/",testRoute)

// === import Routes here ===

// === Enabling file uplod
app.use(fileupload())

// === Adding Secuirty ===

app.use(mongoSanitize())
app.use(xss())

app.use(express.json({ limit: '5mb' }))
app.use(express.urlencoded({ extended: true }))

// === Connecting the DB ===

// === Initiate Routes Here ===

module.exports=app
