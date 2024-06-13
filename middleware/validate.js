import {connect} from "../middleware/connect.js"
export const validate = async(req,res,next) => {
    await connect();
    const data = req.body;
    if(data.p_id && data.p_name && data.p_cost && data.p_cat && data.p_desc && data.p_img)
         next();
    else
        return next(new Error("This is the MiddleWare Error")) 

}