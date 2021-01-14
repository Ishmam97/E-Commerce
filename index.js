const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

const connectDB = require('./database/db')
const { json } = require('express')
const authRoutes = require('./routes/auth')

app.use(cors())
app.use(morgan('dev'))




app.use(express.json())
connectDB();

app.use('/api/auth' , authRoutes)

app.get('/' , (req , res)=>{
   res.send('hello')
})

const port = process.env.PORT || 9001;

app.listen(port , ()=> console.log(`Listening on port ${port}`))

module.exports = app;