import express from "express";
import userRouter from "./routes/user-routes.js";
import ErrorHandler from "./middlewares/error-handler.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", userRouter);
app.use(ErrorHandler);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
