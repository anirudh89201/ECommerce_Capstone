import { Login_Model } from "../models/Login_Model.js";
export const Login = async(req,res) => {
    const data = req.body;
    let doc =  await Login_Model(data);
    if(doc == null)
        return res.status(401).json({message:"UnAuthorized"})
    if(data.u_name == doc.u_name && data.u_pwd == doc.u_pwd)
        return res.status(200).json({message:"User Authenticated Successfully"});
    else
        return res.status(401).json({message:"UnAuthorized"})
    }