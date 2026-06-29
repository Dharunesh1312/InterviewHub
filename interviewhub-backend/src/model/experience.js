import mongoose from 'mongoose';

const experienceSchema= new mongoose.Schema({
    company:{type:String,required:true},
    role:{type:String,required:true},
    questions:{type:String,required:true},
    experience:{type:String,required:true},
    difficulty:{type:String,required:true},
    tips:{type:String,required:true},
    result:{type:String,required:true},
})

const Experience=mongoose.model("Experience",experienceSchema)

export default Experience;