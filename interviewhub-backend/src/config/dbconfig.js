import mongoose from "mongoose";

const connectDb= async()=>{

    try {

        const db= await mongoose.connect(process.env.mongodb);
        console.log("DateBase connected successfullly");    
        
    } catch (error) {
    console.error("MongoDB Error:");
    console.error(error);
    console.error(error.message);
    process.exit(1);
        
    }
};

export default connectDb;