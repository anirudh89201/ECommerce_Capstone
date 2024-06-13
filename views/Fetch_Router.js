import express from "express"
import { Fetch_All, Fetch_ID } from "../controllers/fetch.js";
export const Fetch_Router = express.Router();
Fetch_Router.get("/",Fetch_All);
Fetch_Router.get("/:id",Fetch_ID)