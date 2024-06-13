export const ErrorMiddleWare = (err,req,res,next) => {
    return res.status(500).json({
        error:{
            message:err.message || "Internal Server Error"
        }
    })
}