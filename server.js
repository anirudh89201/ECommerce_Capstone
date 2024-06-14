import express from "express"
import { Auth_router } from "./views/Auth_router.js";
import dotenv from "dotenv";
import cors from "cors"
import { Fetch_Router } from "./views/Fetch_Router.js";
import { product_Router } from "./views/Product_Router.js";
import { ErrorMiddleWare } from "./middleware/error.js";
dotenv.config();
const app = express();
app.use(cors())
app.use(express.json());
app.use("/auth",Auth_router);
app.use("/Fetch",Fetch_Router);
app.use("/Product",product_Router);
app.use(ErrorMiddleWare)
const port = process.env.port || 3000
app.listen(port,() => {
    console.log("Server listening on port 3000")
})