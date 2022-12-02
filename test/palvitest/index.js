const  express= require(express)
const app=require(adminroutes)
const port=5000

app =(express,urlencoded({extended}))
 

app.use.route('/admin',adminroutes)



app.listen (Port=>{
    console.log("server is running in ", port)
})