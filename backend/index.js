const express=require("express")

const app=express()
app.use(express.json())

app.post("/register",(req,res)=>{
    res.send(req.body)
})

app.listen(8080,()=>{
    console.log("server running")
})