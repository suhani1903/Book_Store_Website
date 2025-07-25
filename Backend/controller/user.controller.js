import User from "../model/user.model.js";

export const signup=async(req,res)=>{
    try{
        const {fullname, email,password} = req.body;
    const user=await User.findOne({email})
    if(user){
        return res.status(400).json({message:"User already exists"})
    }
    const createdUser=new User({
        fullname,
        email,
        password
    });
    await createdUser.save();
    res.status(201).json({message:"user cdreated successfully"});
}
    catch (error){
        console.log("Error:" + error.message);
        res.status(500).json({message: "Internal server error"});
    
    }
    
};