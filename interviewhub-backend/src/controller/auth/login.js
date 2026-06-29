import User from '../../model/user.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';


const login= async(req,res)=> {
    try {
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({success:false,message:"All fields are Required"});
        }

        const user= await User.findOne({email:email});

        if(!user){
            return res.status(400).json({success:false,message:"User not fount"}); 
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){
           return res.status(400).json({success:false,message:"Password is incorrect"});

  
        }

        const token = jsonwebtoken.sign(
            { id: user._id,
              email:user.email
            },
            process.env.Key,
            {expiresIn:"7d"}
        )

        res.cookie("auth_token",token,{
            httpOnly: true,
            secure: true,
            sameSite: "none",
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        

return res.status(200).json({success:true,message:"Login successful", token:token})
} catch (error) {
  console.error(error);
  return res.status(500).json({ success:false, message:"Internal server error" });
}


}

export default login;