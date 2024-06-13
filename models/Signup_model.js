import mongoose from "mongoose";
import { connect } from "../middleware/connect.js";
const schema = new mongoose.Schema({
    u_name: String,
    u_pwd: String,
    u_email: String,
    u_addr: String,
    u_contact: Number
});

const signup_Model = mongoose.model("Users", schema);

export const Signup_Model = async ({ u_name, u_pwd, u_email, u_addr, u_contact }) => {
    await connect();
    const response = await signup_Model.create({
        u_name,
        u_pwd,
        u_email,
        u_addr,
        u_contact
    });
    return response;
};
