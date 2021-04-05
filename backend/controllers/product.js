const Product = require("../models/Product")
const fs = require('fs')
const mongoose = require("mongoose")

exports.create = async (req , res ) =>{
    console.log(req.body)
    console.log(req.file)
    console.log(req.user)

    const {filename} = req.file
    const {pName, pDesc, pPrice,pQty,pCat} = req.body
    const useR = req.user._id
    try{
        let product = new Product();
        product.filename = filename
        product.pName = pName
        product.pDesc = pDesc
        product.pPrice = pPrice
        product.pQty = pQty
        product.pCat = pCat
        product.createdby = useR
        await product.save()
        res.json({
            successMsg: `${pName} has been added to database`,
            product
        })
        
    }catch(e){
        console.log(e)
        res.status(500).json({
            errorMsg: "error occured in create"
        })
    }
}

exports.readAll = async (req , res ) =>{
    try{    
        const products = await Product.find({}).populate('pCat' , 'category')
        res.json({successMsg:'Retreived products',products})

    }catch(e){
        console.log(e)
        res.status(500).json({
            errorMsg: "error occured in read",
        })
    }
}
exports.delete = async (req , res ) =>{
    try{    
        const pId = req.params.pId
        const deleted = await Product.findByIdAndDelete(pId);
        //delete img from uploads
        fs.unlink(`uploads/${deleted.filename}`,(err)=>{
            if(err) throw err;
            console.log("image deleted")
        })
        res.json(deleted)
    }catch(e){
        console.log(e)
        res.status(500).json({
            errorMsg: "error occured in delete",
        })
    }
}
exports.update = async (req , res) =>{
    console.log(req.params)
    const {pId : _id} = req.params
    if(!mongoose.Types.ObjectId.isValid(_id)){
        console.log(`id ${_id} not found`)
        res.status(404).json({
            errorMsg: "No post found"
        })
    }    
    try{
        if(req.body.pImg !=='null'){
            var ob = {...req.body, 'filename': req.file.filename, 'createdby':req.user._id}            
        }else{
            const {pName, pDesc, pPrice,pQty,pCat} = req.body
            var ob = {pName , pDesc , pPrice , pQty , pCat , 'createdby':req.user._id}            
        }        
        console.log("object : " , ob)
        /// TO DO DELETE OLD FILE FROM UPLOADS IMPLEMENT
        
        console.log()
        var edited = await Product.findByIdAndUpdate(_id, ob ).catch(e => console.log(e))
        fs.unlink(`uploads/${edited.filename}`,(err)=>{
            if(err) throw err;
            console.log(edited.filename ,"image deleted")
        })
        console.log('edited :###')
        res.status(200).json({
            edited,
            successMsg:"successfully edited"
        })
        
    }catch(e){
        console.log(`edit error : ${e}`)
        res.status(500).json({
            errorMsg:`error occured in editproduct ${e}`
        })
    }
}