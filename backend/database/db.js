const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://ishmam:test123@cluster0.engz5.mongodb.net/<dbname>?retryWrites=true&w=majority", {
            useNewUrlParser : true,
            useUnifiedTopology: true
        });
        console.log("Database Connected")
    }catch(err){
        console.log(err)
    }
}
module.exports = connectDB;