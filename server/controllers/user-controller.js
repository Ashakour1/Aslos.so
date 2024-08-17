import asyncHandler from "express-async-handler";
import bcrypt from "bcrypt";
import prisma from "../config/prisma.js";

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

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    res.status(400);
    throw new Error("Invalid credentials");
  }

  res.status(200).json({
    message: "Login successfully",
    user: user,
  });
});

