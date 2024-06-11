const Category = require("../models/Category");

/* Get user id from token. this is useful to keep track of 
    who is making changes or updates in categories. 
    Create is for creating a new category whiles readALL retreives all categories
*/

exports.create = async (req, res, next) => {
  const { category } = req.body;
  const useR = req.user._id;
  try {
    let newCategory = new Category();
    const exist = await Category.findOne({ category });
    if (exist) {
      return res.status(400).json({
        errorMsg: "category already exists",
      });
    }
    newCategory.category = category;
    newCategory.createdby = useR;
    //Store new category in DB
    newCategory = await newCategory.save();
    res.status(200).json({
      category : newCategory,
      successMsg: `${newCategory.category} was created`,
    });
  } catch (err) {
    console.log("error in controller", err);
    res.status(500).json({
      errorMsg: "server error , try again error",
    });
  }
};


exports.readAll = async (req, res) => {
  try {
    //returns all Categories from DB
    const categories = await Category.find({});

    res.status(200).json({
      categories,
    });
  } catch (err) {
    console.log("error in controller", err);
    res.status(500).json({
      errorMsg: "server error , try again error",
    });
  }
};
