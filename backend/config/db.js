const mongoose= require("mongoose");
const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("mongoDB connected successfully")
    }catch(error){
        console.log("MongoDB connection Error :" , error.message)
    }
};
module.exports = connectDB