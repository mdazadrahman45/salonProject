const  express = require('express')
const dotenv = require("dotenv")
const cors = require("cors")
const connectDB = require("./config/db")
const customerRoutes = require('./routes/customerRouts')
dotenv.config()
const app = express()
connectDB()
// routes
app.use("/api/customer",customerRoutes)

// test 
app.get("/",(req,res)=>{
    res.send("salon backedn is running ")
})

const port = process.env.PORT
 
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})