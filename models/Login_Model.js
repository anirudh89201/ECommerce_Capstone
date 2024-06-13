import mongoose from "mongoose";
import { connect } from "../middleware/connect.js";

// Define the schema outside of the Login_Model function
const schema = new mongoose.Schema({
    u_name: {
        type:String,
        required:true
    },
    u_pwd: {
        type:String,
        required:true
    }
});

// Define the model outside of the Login_Model function
const login_Model = mongoose.model("users", schema);

export const Login_Model = async ({ u_name, u_pwd }) => {
    await connect();
    const doc = await login_Model.findOne({ u_name });
    if(doc!=null) return doc;

};
