import { Product_Model } from "../models/Product_Model.js"
 const InsertProduct = async(req,res) => {
    const {p_id,p_name,p_cost,p_cat,p_desc,p_img} = req.body;
    const response = await Product_Model.create({
        p_id,
        p_name,
        p_cost,
        p_cat,
        p_desc,
        p_img
    })
    if(response)
        return res.status(200).json({message:"Record Inserted Successfully"})
    else
        return res.status(404).json({message:"Unable to retrive page"})
}
export {InsertProduct};