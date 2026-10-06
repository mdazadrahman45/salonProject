const Customer = require("../model/customerModel");
const bcrypt = require("bcryptjs")

const registerCustomer = async (req,res)=>{
    try {
        const {fullName ,email , mobile , password , confirmPassword } = req.body
    
    // check all field 
    if( !fullName || !email || !mobile || !password || !confirmPassword ){
      return res.status(400).json({
        message: " all field are require ",

      })
    }
    // check password 
    if ( password !== confirmPassword){
        return res.status(400).json({
            message: " password do  not match ! " , 
        })
    }

    // check existing customer 
    const existingCustomer = await 
    Customer.findOne({
        $or :[{email},{mobile}],
    })

    if(existingCustomer){
        return res.status(400).json({
            message:"Email or mobile already registered",
        })
    }
    // hash password 
    const hashedPassword = await 
    bcrypt.hash(password,10)

    //  create customer 
    const customer = await Customer.create({
        fullName,
        email,
        mobile,
        password:hashedPassword
      })
      res.status(201).json({
        message: "Customer registered  successfully",
        customer : {
            id: customer._id,
            fullName : customer.fullName,
            email : customer.email,
            mobile: customer.mobile,
        },
      });


} catch (error){
    res.status(500).json({
        message: " server error " , error : error.message
    })

}
}
 module.exports = {registerCustomer}