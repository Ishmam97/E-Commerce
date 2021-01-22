const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const connectDB = require('./database/db')
const { json } = require('express')
const cookieParser = require('cookie-parser')

const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')

app.use(cors())
app.use(morgan('dev'))

app.use(express.json())

app.use(cookieParser())
connectDB();

app.use('/api/auth' , authRoutes)

app.use('/api/category' , categoryRoutes)

const port = process.env.PORT || 9001;

app.listen(port , ()=> console.log(`Listening on port ${port}`))

module.exports = app;