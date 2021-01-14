const express = require('express')
const router = express.Router()

router.post('/signup' , (req , res)=>{
    console.log('inside signup handler backend')
})

module.exports = router