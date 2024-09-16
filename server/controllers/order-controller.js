import asyncHandler from "express-async-handler";
import prisma from "../config/prisma.js";

// get the orders from the database
export const getOrders = asyncHandler(async (req, res) => {
  const orders = await prisma.order.findMany({
    include: {
      OrderItem,
      Shipping,
    },
  });
  res.json(orders);
});

// get order
export const getOrder = asyncHandler(async (req, res) => {
  const order = await prisma.order.findUnique({
    where: {
      id: Number(req.params.id),
    },
    include: {
      OrderItem,
      Shipping,
    },
  });
  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// create order

export const createOrder = asyncHandler(async (req, res) => {
  const { total, product_id, paymentMethod, OrderItem, Shipping } = req.body;

  const order = await prisma.order.create({
    data: {
      total,
      product_id,
      paymentMethod,
      OrderItem: {
        create: OrderItem,
      },
      Shipping: {
        create: Shipping,
      },
    },
  });

  res.status(201).json(order);
});
