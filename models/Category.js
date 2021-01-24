const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    category:{
        type: String,
        required: true,
        trim: true,
        maxlength: 40
    },
    createdby:{
       type: String 
    }
} , {timestamps:true})

const Category = mongoose.model('Category' , categorySchema);

module.exports = Category