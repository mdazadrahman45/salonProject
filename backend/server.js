const  express = require('express')
const dotenv = require("dotenv")
const connectDB = require("./config/db")
dotenv.config()
const app = express()
connectDB()

app.get("/",(req , res)=>{
    res.send("server is running ")
})

const port = process.env.PORT
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})