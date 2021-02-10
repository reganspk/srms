import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from "express";
import config from "./config.js";
import dotenv from "dotenv";
import userRouter from "./router/userRoute.js";
dotenv.config();
const mongodb_uri = config.MONGODB_URI;
mongoose.connect(mongodb_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection.on("error", function (err) {
  if (err) throw err;
  else console.log("connected");
});

const app = express();
app.use(bodyParser.json());
app.use("/api/user", userRouter);
app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is started at http://localhost:${PORT}`);
});
