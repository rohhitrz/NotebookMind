import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app=express()
const PORT=process.env.PORT;

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("hello")    
})

app.get("/health",(req,res)=>{
    res.json({"message":"healthy"})    
})


app.listen(PORT,()=>{
    console.log(`app is runnning on port ${PORT}`)
})


