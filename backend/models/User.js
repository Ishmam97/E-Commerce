const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    uName:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    pass:{
        type: String,
        required:true
    },
    role:{
        type: Number,
        default:0
    },
    
} , {timestamps:true});

const User = mongoose.model('User', userSchema);

module.exports = User;