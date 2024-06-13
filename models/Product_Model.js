import express from "express"
import mongoose from "mongoose"
const Product_Schema = new mongoose.Schema({
    p_id:Number,
    p_name:String,
    p_cost:Number,
    p_cat:String,
    p_desc:String,
    p_img:String
})
export const Product_Model = mongoose.model("products",Product_Schema);