const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

const connectDB = require('./database/db')
const { json } = require('express')
const cookieParser = require('cookie-parser')


//api routes
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')

//middleware
app.use(cors())
app.use(morgan('dev'))

app.use(express.json())

app.use(cookieParser())
// app.use(express.static('public'));
app.use('/uploads' , express.static('uploads'))
app.use('/api/images' , require('./routes/images'))

//connect to mongoDB
connectDB();

//using routing 
app.use('/api/auth' , authRoutes)

app.use('/api/category' , categoryRoutes)

app.use('/api/product' , productRoutes)

//start server

const port = process.env.PORT || 9001;
app.listen(port , ()=> console.log(`Listening on port ${port}`))

module.exports = app;