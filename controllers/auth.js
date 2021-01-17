const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.signUpController = async (req , res)=>{
    const {uname , email , pass} = req.body;
    try{
        const user = await User.findOne({email})
        if (user){
            return res.status(400).json({
                errorMsg:'Email already exists',
            })
        }
        const newUser = new User();
        newUser.uName = uname;
        newUser.email = email;
        
        const salt = await bcrypt.genSalt(10)

        newUser.pass = await bcrypt.hash(pass , salt)
        // console.log(newUser.pass);
        await newUser.save()
        res.json({
            successMsg:"Account has been created , please sign in"
        })
    }catch(err){
        console.log("error from controller" ,err)
        res.status(500).json({
            errorMsg:'Server error'
        })
    }
}
exports.signinController = async (req , res)=>{
    const { email , pass} = req.body;
    try{
        const user = await User.findOne({email})
        if (!user){
            return res.status(400).json({
                errorMsg:'Invalid Credentials',
            })
        }
        const isMatch = await bcrypt.compare(pass , user.email);
        if(!isMatch){
            return res.status(400).json({
                errorMsg:'Invalid Credentials'
            })
        }
        const payload = {
            user:{
                _id: user._id,
            },
        }

    }catch(err){
        console.log("error from signIncontroller" ,err)
        res.status(500).json({
            errorMsg:'Server error'
        })
    }
    console.log("signingcontroller")
}