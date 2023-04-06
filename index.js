const express=require("express")

const app=express()
app.use(express.json())

app.post("/register",(req,res)=>{
    // const {name,email}=req.body
    // console.log('user: ', user);
    res.send(req.body)
})

app.listen(8080,()=>{
    console.log("server running")
})