const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const connectDB = require('./database/db')
const { json } = require('express')

app.use(cors)
app.use(morgan('dev'))
app.use(express.json())

connectDB();

const port = process.env.PORT || 5000;

app.listen(port , ()=> console.log(`Listening on port ${port}`))