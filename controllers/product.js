const Product = require("../models/Product")

exports.create = async (req , res ) =>{
    console.log(req.body)
    console.log(req.file)
    console.log(req.user)

    const {filename} = req.file
    const {pName, pDesc, pPrice,pQty,pCat} = req.body

    try{
        let product = new Product();
        product.filename = filename
        product.pName = pName
        product.pDesc = pDesc
        product.pPrice = pPrice
        product.pQty = pQty
        product.pCat = pCat

        await product.save()
        res.json({
            successMsg: `${pName} has been added to database`
        })
        
    }catch(e){
        console.log(e)
        res.status(500).json({
            errorMsg: "error occured in create"
        })
    }
}