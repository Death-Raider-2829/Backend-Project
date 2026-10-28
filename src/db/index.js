import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const instance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected!! DB HOST: `, instance)
    } catch (error) {
        console.log("MONGODB_URI:", process.env.MONGODB_URI);
        console.log(error);
        process.exitCode = 1;
    }
}

export default connectDB