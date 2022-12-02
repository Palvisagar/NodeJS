const express = require('express')
const app = express()
const port=5000
const adminRoute= require('./Routes/adminRoutes')


app.use(express.urlencoded({extended:true}))
app.get('/', function(req,res){
    console.log("first api works")
    // res.send("first api works")

        res.json({
            "status":200,
            "sucess":true,
            "message":"first api work"
        })
})

app.post("/home",(req,res)=>{

    res.json({
        "status":200,
        "sucess":true,
        "message":"home page loaded",
        "data":req.data

    })
})
app.get('/about',(req,res)=>{
    // console.log("Header data = "+req.header)

    res.json({
        "status":200,
        "sucess":true,
        "message":"about page loaded",

    })
})
app.get('/contact',(req,res)=>{
    // console.log("Header data = "+req.header)

    res.json({
        "status":200,
        "sucess":true,
        "message":"home page loaded",
        "phone":098765432,

    })
})
app.get('/login',(req,res)=>{
    // console.log("Header data = "+req.header)

    res.json({
        "status":200,
        "sucess":true,
        "message":"login page loaded",

}) 
}) 
app.use('/admin',adminRoute)
app.listen(port,()=>{
    console.log("Server running at port ",port)
})