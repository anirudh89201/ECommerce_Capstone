import express from "express"
import { Signup } from "../controllers/Signup.js";
import { Login } from "../controllers/Login.js";
export const Auth_router = express.Router();
Auth_router.post("/Signup",Signup)
Auth_router.post("/Login",Login);