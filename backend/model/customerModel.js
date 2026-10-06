const mongoose = require("mongoose")
const customerSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
        trim: true
    },
   email:{
        type: String,
        required: true,
        unique: true,
        lowercase:true,
        trim: true
    },
    mobile:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength:6
    },
},
{
    timestamps: true,
}
)
 const customerModel =mongoose.model("Customer",customerSchema)
module.exports= customerModel