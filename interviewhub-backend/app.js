import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDb from './src/config/dbconfig.js';   
import auth from "./src/router/auth.js";
import experience from "./src/router/experience.js";
import cookieParser from 'cookie-parser';



dotenv.config();
connectDb();

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", auth);
app.use("/api/experience", experience);

app.get("/",(req,res)=>{
    res.send("successfull");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})