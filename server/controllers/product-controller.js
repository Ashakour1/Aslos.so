import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";
import cloudinary from "../config/cloudinary.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = asyncHandler(async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
export const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create a product
// @route   POST /api/products
// access private/admin

export const createProduct = asyncHandler(async (req, res) => {
  try {
    const { name, description, category, price, stock } = req.body;

    // console.log(name, description, category, price, stock);

    if (!name || !description || !category || !price || !stock) {
      res.status(400);
      throw new Error("Please fill all the fields");
    }
    const productExists = await prisma.product.findFirst({
      where: {
        name: name,
      },
    });

    if (productExists) {
      res.status(400);
      throw new Error("Product already exists");
    }

    let result = null;

    if (req.file) {
      const encodedImage = `data:image/jpeg;base64,${req.file.buffer.toString(
        "base64"
      )}`;

      result = await cloudinary.uploader.upload(encodedImage, {
        resource_type: "image",
        transformation: [{ width: 500, height: 500, crop: "limit" }],
      });
    }

    const product = await prisma.product.create({
      data: {
        name,
        description,
        category,
        price: parseFloat(price),
        stock: parseInt(stock),
        image: result?.url || null,
      },
    });

    res.status(201).json({
      data: product,
      message: "Product created successfully",
    });
  } catch (err) {
    res.status(500);
    throw new Error(err.message);
  }
});

// @desc    Update a product
// @route   PUT /api/products/:id
// access private/admin
export const updateProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, description, category, price, stock } = req.body;

  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  let result = null
  if (req.file) {
    const encodedImage = `data:image/jpeg;base64,${req.file.buffer.toString(
      "base64"
    )}`;

     result = await cloudinary.uploader.upload(encodedImage, {
      resource_type: "image",
      transformation: [{ width: 500, height: 500, crop: "limit" }],
    });
  }
  const updatedProduct = await prisma.product.update({
    where: {
      id: id,
    },
    data: {
      name,
      description,
      category,
      price: parseFloat(price),
      stock: parseInt(stock),
      image: result?.url || null,
    },
  });

  res.status(200).json({
    data: updatedProduct,
    message: "Product updated successfully",
  });
});

// @desc    Delete a product
// @route   DELETE /api/products/:id
// access private/admin
export const deleteProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  await prisma.product.delete({
    where: {
      id: id,
    },
  });

  res.json({ message: "Product removed" });
});
