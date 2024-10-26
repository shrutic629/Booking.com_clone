import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import hotelRoute from "./routes/hotels.js";
import roomRoute from "./routes/rooms.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected");
});

app.use(cors())
app.use(cookieParser())
app.use(express.json());

app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/hotels", hotelRoute);
app.use("/rooms", roomRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  connect();
  console.log("connected to Backend");
});
