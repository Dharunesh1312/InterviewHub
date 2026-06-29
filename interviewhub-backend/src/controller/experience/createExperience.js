import Experience from '../../model/experience.js';

const createExperience= async(req,res) => {
    try{
        const {company,role,questions,experience,difficulty,tips,result} = req.body;

        if(!company || !role || !questions || !experience || !difficulty || !tips || !result) {
            return res.status(400).json({ success:false, message:"All fields are required" });
        }

        const newExperience = new Experience({
            company,
            role,
            questions,
            experience,
            difficulty,
            tips,
            result
        });

        await newExperience.save();
        return res.status(200).json({success:true,message:"Experience created successfully"});
    } catch (error) {
        return res.status(500).json({ success:false, message:"Internal server error" });
    }
}

export default createExperience;