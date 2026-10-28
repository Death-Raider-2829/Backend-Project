import 'dotenv/config'

import express from "express";
import { PORT } from "./constants.js";
import connectDB from "./db/index.js";

connectDB()

const app=express();

app.get('/',(req,res)=>{
    res.send("Default Page");
})

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
})
