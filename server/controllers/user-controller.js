import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import prisma from "../config/prisma.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/config.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { name, username, email, password } = req.body;

  if (!name || !username || !email || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const userExists = await prisma.user.findUnique({
    where: {
      email,
      AND: {
        username,
      },
    },
  });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      username,
      email,
      password: hashedPassword,
      role: "Admin",
    },
  });

  res.status(201).json({
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    role: user.role,
  });
});

export const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400);
    throw new Error("Please fill in all fields");
  }

  const user = await prisma.user.findUnique({
    where: {
      username,
    },
  });

  // console.log(user);
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  const expiresIn = 60 * 60 * 24 * 30;

  const token = jwt.sign(
    {
      id: user.id,
    },
    JWT_SECRET,
    { expiresIn: expiresIn }
  );

  // console.log(token);

  res.status(200).json({
    user,
    token,
    expiresIn,
    message: "Login successfully",
  });
});

export const getUser = asyncHandler(async (req, res) => {
  console.log(req.user);
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
  });

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  res.status(200).json({
    data: user,
  });
});
