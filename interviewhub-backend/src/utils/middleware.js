import jsonwebtoken from "jsonwebtoken";
import User from "../model/user.js";

const protect = async (req, res, next) => {
       try {
       
        const token = req.cookies.auth_token;

        if (!token) {
            return res.status(401).json({ success:false, message:"Token is missing" });
        }

        const decoded = jsonwebtoken.verify(token, process.env.Key);

        const user =await User.findById(decoded.id);

       

        if (!user) {
            return res.status(401).json({ success:false, message:"User not found" });
        }

        req.user = user;

    
        next();

} catch (error) {
  console.error(error);
  return res.status(500).json({ success:false, message:"Internal server error" });
}


}

export default protect;
