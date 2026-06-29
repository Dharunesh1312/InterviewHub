


const logout= async(req,res)=> {
    try {
       
        res.clearCookie("auth_token");

        

return res.status(200).json({success:true,message:"Logout successful"})
} catch (error) {
  console.error(error);
  return res.status(500).json({ success:false, message:"Internal server error" });
}


}

export default logout;