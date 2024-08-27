import express from "express";
import {
  registerUser,
  loginUser,
  getUser,
} from "../controllers/user-controller.js";
import { authMiddleware } from "../middlewares/auth-middleware.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/:id", authMiddleware, getUser);

export default userRouter;
