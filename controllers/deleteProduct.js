import mongoose from "mongoose";
import { Product_Model } from "../models/Product_Model.js";
import { url } from "../utils/url.js";
export const deleteProduct = async(req,res) => {
    await mongoose.connect(url);
    const id =req.params.id;
    const data = await Product_Model.findOneAndDelete({"p_id":id})
    console.log(data);
    if(!data){
        return res.status(404).json({message:"Products Not Found"})
    }else{
        return res.status(200).json({message:"Deleted Successfully"})
    }
}