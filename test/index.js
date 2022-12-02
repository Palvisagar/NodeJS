const  express= require(express)
const app=require(adminroutes)
const port=5000

app =(express.urlencoded({extended:true}))
 

app.use.route('/admin',adminroutes)


app.listen (port,()=>{
    console.log("server is running in ", port)
})