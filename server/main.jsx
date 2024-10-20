import react from 'react'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
const dbConnection=async()=>{
    if(await mongoose.connect(process.env.MONGO_URL)){
        console.log("Connected to MongoDB")
    }

}
dbConnection();
const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})




