import User from '../../model/user.js';
import bcrypt from 'bcrypt';

const register= async(req,res) => {
    try{


        const{name,email,password}=req.body;

        //to chexk all field
        if(!name || !email || !password){
            return res.status(400).json({success:false,message:"All fields are required"})
        }


        const existingUser = await User.findOne({ email });
        if(existingUser){
    return res.status(400).json({success:false, message:"User already exists"});
}

       const hassedPassword= await bcrypt.hash(password,10)

       const user = new User({ 
        name,
        email,
        password:hassedPassword
    });

await user.save()

return res.status(200).json({success:true,message:"user created successfully",user:user})

    }catch(error){
            return res.status(500).json({success:false,message:"Internal server error"})

    }
}

export default register;