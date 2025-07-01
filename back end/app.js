import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

app.get("/",(req,res)=>{res.send("everything working well")})

app.listen(PORT,()=>{ console.log(`server is running on ${PORT}`)})