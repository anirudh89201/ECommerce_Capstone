import { Product_Model } from "../models/Product_Model.js";
export const updateProduct = async(req,res) => {
    const data = req.body;
    const response = await Product_Model.updateOne({"p_id":data.p_id},{$set:data});
    console.log(response)
    if(response.matchedCount==1)
        return res.status(200).json({message:"Updated Successfully"})
    else
        return res.status(500).json({message:"Internal Server Error"})
}