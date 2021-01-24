const Category = require('../models/Category')

exports.create= async (req , res , next) =>{
    const {category } = req.body;
    const useR = req.user._id
    try{
        let newCategory = new Category();
        const exist = await Category.findOne({category})
        if (exist){
            return res.status(400).json({
                errorMsg:'category already exists',
            })
        }
        newCategory.category = category;
        newCategory.createdby = useR;
        newCategory = await newCategory.save();
        res.status(200).json({
            successMsg: `${newCategory.category} was created`
        })
    }catch(err){
        console.log('error in controller' , err)
        res.status(500).json({
            errorMsg:'server error , try again error'
        })
    }
}
exports.readAll = async (req , res)=>{
    try{
        const categories = await Category.find({})

        res.status(200).json({
            categories
        })

    }catch(err){
        console.log('error in controller' , err)
        res.status(500).json({
            errorMsg:'server error , try again error'
        })
    }
}