import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

export const createCategory = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  if (!name || !description) {
    res.status(400);
    throw new Error("Name and description are required");
  }

  const existingCategory = await prisma.category.findUnique({
    where: {
      name,
    },
  });

  if (existingCategory) {
    res.status(400);
    throw new Error("Category already exists");
  }

  const category = await prisma.category.create({
    data: {
      name,
    },
  });
  res.json(category);
});

export const getCategories = asyncHandler(async (req, res) => {
  const categories = await prisma.category.findMany();
  res.json(categories);
});

export const getCategoryById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await prisma.category.findUnique({
    where: {
      id: Number(id),
    },
  });

  if (!category) {
    res.status(404);
    throw new Error("Category not found");
  }

  res.json(category);
});

export const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const { name, description } = req.body;

  if (!name || !description) {
    res.status(400);
    throw new Error("Name is required");
  }

  const category = await prisma.category.update({
    where: {
      id: Number(id),
    },
    data: {
      name,
      description,
    },
  });

  res.json(category);
});

export const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  await prisma.category.delete({
    where: {
      id: Number(id),
    },
  });

  res.json({ message: "Deleted Successfully" });
});
