exports.create= (req , res , next) =>{
    res.json({
        successMsg:`${req.body.category} has been added to categories`
    })
}