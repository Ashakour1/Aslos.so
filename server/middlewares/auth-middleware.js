import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";
import prisma from "../config/prisma.js";

export const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, JWT_SECRET);

      const user = await prisma.user.findUnique({
        where: {
          id: decoded.id,
        },
      });

      req.user = user;

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  }
});
