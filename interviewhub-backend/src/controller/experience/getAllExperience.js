import Experience from '../../model/experience.js';

const getAllExperience= async(req,res) => {
    try{
        const experiences = await Experience.find();
        return res.status(200).json({success:true,message:"Experience fetched successfully", data:experiences});

    }catch (error) {
        return res.status(500).json({ success:false, message:"Internal server error" });
    }
}

export default getAllExperience;
