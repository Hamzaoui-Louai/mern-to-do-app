import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js"

dotenv.config()

const app = express();
const PORT = 3000;

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

app.use(express.json())

app.use("/api/notes",notesRoutes)

app.listen(PORT,()=>{ console.log(`server is running on ${PORT}`)})