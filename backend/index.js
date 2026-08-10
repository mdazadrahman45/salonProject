const  express = require('express')
const  app = express()

app.use('/student',(req,res)=>{
    res.send('welcome ')
})

app.listen(5050, ()=> console.log("running"))