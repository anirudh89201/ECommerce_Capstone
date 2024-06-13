import { Signup_Model } from "../models/Signup_model.js";
export const Signup = (req,res) => {
    const data = req.body;
    console.log(data);
    let response = Signup_Model(data);
    if(response){
        return res.status(200).json({message:"Record Inserted Succesfully"})
    }else{
        return res.statsu(500).json({message:"Internal Server Error"});
    }
}