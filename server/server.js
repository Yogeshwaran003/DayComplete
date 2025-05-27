import express from 'express'
import 'dotenv/config'
import connectDB from './config/mongoDB.js'
const app = express()

app.use(express.json())
connectDB()

app.get("/",(req,res)=>{
    res.send("<h1>Hello world</h1>")
})

app.listen(4000,()=>{
    console.log("server is connected")
})