import Experience from "../../model/experience.js";


const getSingleExperience= async(req,res)=> {
    try {
       
       const id = req.params.id;
       const experience = await Experience.findById(id);

       if (!experience) {
           return res.status(404).json({success:false,message:"Experience not found"});
       }

       return res.status(200).json({success:true,message:"Experience fetched successfully", data:experience});
} catch (error) {
  console.error(error);
  return res.status(500).json({ success:false, message:"Internal server error" });
}


}

export default getSingleExperience;

