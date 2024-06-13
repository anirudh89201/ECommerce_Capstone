import express from "express"
import { InsertProduct} from "../controllers/InsertProduct.js";
import { updateProduct } from "../controllers/updateProduct.js";
import { validate } from "../middleware/validate.js";
import { connect } from "../middleware/connect.js";
import { deleteProduct } from "../controllers/deleteProduct.js";
export const product_Router = express.Router();
product_Router.post("/insert",validate,InsertProduct);
product_Router.patch("/update",validate,updateProduct);
product_Router.delete("/delete/:id",deleteProduct);