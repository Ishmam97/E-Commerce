const express = require('express')
const router = express.Router()
const path= require('path')
const fs = require('fs')

router.get('/' , (req , res) => {
    fs.readdir(path.join('uploads') , (err , files)=>{
        if(err){
            return res.json({
                errorMsg: "error in image folder"
            })
        }else{
            return res.json({
                files
            })
        }
    })
})
module.exports = router