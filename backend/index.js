const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const app = express()

const connectDB = require('./database/db')
const { json } = require('express')
const cookieParser = require('cookie-parser')


//api routes
const authRoutes = require('./routes/auth')
const categoryRoutes = require('./routes/category')
const productRoutes = require('./routes/product')

app.use(cors({
    origin: 'http://192.168.0.4:3000' // Replace with your laptop's IP address and port 3000
  }));

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use(morgan('dev'))

app.use(express.json())

app.use(cookieParser())
// app.use(express.static('public'));
app.use('/uploads', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://192.168.0.4:3000');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
  }, express.static('uploads'));
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