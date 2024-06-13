import mongoose from "mongoose";
import { url } from "../utils/url.js";
export const connect = async () => {
    try{
        const response = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        if(response){
            console.log("MongoDB connected succesfully");
        }
    }catch(error){
        throw new Error(error);
    }  
};
