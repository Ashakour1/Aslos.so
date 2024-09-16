import express from "express";
import userRouter from "./routes/user-routes.js";
import ErrorHandler from "./middlewares/error-handler.js";
import dotenv from "dotenv";
import productRouter from "./routes/product-routes.js";
import orderRouter from "./routes/order-routes.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
  })
);
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", userRouter);
app.use("/api/products", productRouter);
app.use("/api/orders", orderRouter);
app.use(ErrorHandler);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
