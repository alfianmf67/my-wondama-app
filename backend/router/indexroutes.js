import express from "express";
import { getUsers, Register, Login, Logout, getUserByID } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

 
const Routes = express.Router();
 
Routes.get('/users', verifyToken, getUsers);
Routes.post('/users', Register);
// Routes.post('/login', Login);
Routes.get('/token', refreshToken);
Routes.delete('/logout', Logout);
Routes.post('/login', getUserByID);

export default Routes;