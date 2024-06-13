import { Product_Model } from "../models/Product_Model.js"
import { connect } from "../middleware/connect.js";
export const Fetch_All = async(req,res) => {
    await connect();
    try{
        const data = await Product_Model.find({});
    if(data){
        return res.status(200).json(data);
    }else{
        return res.status(500).json({message:"UnAuthorized"});
    }
    }catch(error){
        console.log("Error:=" + error);
    }
}
export const Fetch_ID = async(req,res) => {
    await connect();
    try{
        const id = req.params.id;
        const data = await Product_Model.find({"p_id":id}); 
    if(data){
        return res.status(200).json(data);
    }else{
        return res.status(404).json({message:"ID NOT FOUND"})
    }
    }catch(error){
        console.log("Error:=" + error);
    }
}