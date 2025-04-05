
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'
import multer from 'multer'
import {newsignup,loginuser} from './controller/user.js'
import {
    createContact,
    getAllContacts,
    getContactById,
    deleteContact,
  } from './controller/contact.js'


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


// Configure Multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // Directory to store uploaded files
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname); // Unique filename
    },
  });
  
  // Initialize Multer middleware
  const upload = multer({ storage });


app.post("/registerUsers",newsignup)
app.post("/loginUsers",loginuser)

app.post("/contact", upload.single("attachment"), createContact);
app.get("/contacts", getAllContacts);
app.get("/contact/:id", getContactById);
app.delete("/contact/:id", deleteContact);