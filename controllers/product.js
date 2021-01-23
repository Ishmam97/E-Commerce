exports.create = async (req , res ) =>{
    console.log(req.body)
    console.log(req.file)
    console.log(req.user)

    res.json({
        message : 'inside pController'
    })
}