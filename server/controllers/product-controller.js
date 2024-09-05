import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";
import cloudinary from "../config/cloudinary.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
export const getProducts = asyncHandler(async (req, res) => {
  const qNew = req.query.new;

  const { sex, category, collection } = req.query;

  // console.log(req.query);

  try {
    let products;

    if (qNew) {
      products = (await prisma.product.findMany()).sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    } else if (category) {
      products = await prisma.product.findMany({
        where: {
          category,
        },
      });
    } else if (sex) {
      products = await prisma.product.findMany({
        where: {
          sex,
        },
      });
    } else if (collection) {
      products = await prisma.product.findMany({
        where: {
          collection,
        },
      });
    } else {
      products = await prisma.product.findMany();
    }
    res.status(200).json(products);
  } catch (error) {
    console.log(error);
  }
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
    const {
      name,
      description,
      sex,
      category,
      price,
      stock,
      collection,
      color,
      size,
    } = req.body;

    // console.log(req.body);

    if (
      !name ||
      !description ||
      !sex ||
      !category ||
      !price ||
      !stock ||
      !collection ||
      !color ||
      !size
    ) {
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
    const parsedColor = Array.isArray(color) ? color : JSON.parse(color);
    const parsedSize = Array.isArray(size) ? size : JSON.parse(size);

    const product = await prisma.product.create({
      data: {
        name,
        description,
        sex,
        category,
        price: parseFloat(price),
        stock: parseInt(stock),
        collection,
        color: parsedColor,
        size: parsedSize,
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
  const {
    name,
    description,
    sex,
    category,
    price,
    stock,
    collection,
    size,
    color,
  } = req.body;

  if (
    !name ||
    !description ||
    !sex ||
    !category ||
    !price ||
    !stock ||
    !collection ||
    !size ||
    !color
  ) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  // Find the product by its ID
  const product = await prisma.product.findUnique({
    where: { id },
  });

  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }

  let imageUrl = product.image; // Keep the existing image URL by default

  if (req.file) {
    const encodedImage = `data:image/jpeg;base64,${req.file.buffer.toString(
      "base64"
    )}`;

    const result = await cloudinary.uploader.upload(encodedImage, {
      resource_type: "image",
      transformation: [{ width: 500, height: 500, crop: "limit" }],
    });

    imageUrl = result.url; // Update the image URL if a new image is uploaded
  }

  const parsedColor = Array.isArray(color) ? color : JSON.parse(color);
  const parsedSize = Array.isArray(size) ? size : JSON.parse(size);

  // Update the product with the new data
  const updatedProduct = await prisma.product.update({
    where: { id },
    data: {
      name,
      description,
      sex,
      category,
      price: parseFloat(price),
      stock: parseInt(stock),
      collection,
      color: parsedColor,
      size: parsedSize,
      image: imageUrl, // Use the existing or new image URL
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
