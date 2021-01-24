const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema
const productSchema = new mongoose.Schema({
    filename : {
        type:'String',
        required:true
    },
    pName : {
        type : 'String',
        required : true,
        trim : true,
        maxlength:100
    },
    pDesc : {
        type : 'String',
        required : true,
        trim : true,
    },
    pCat : {
        type : ObjectId,
        ref: 'Category',
        required : true,        
    },
    pQty:{
        type: Number,
        required : true
    },
    pPrice:{
        type: Number,
        required : true
    },
    createdby:{
       type: String 
    }

} , {timestamps: true})

const Product = mongoose.model('Product' , productSchema)

module.exports = Product