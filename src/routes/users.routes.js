import { Router } from "express";
import { login, register } from "../controllers/users.controller.js";

const userRouter = Router();

userRouter.post("/register", register);

userRouter.post("/", login);
export default userRouter;
