import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { userRouter } from "./routes.js";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

const port = process.env.PORT;

app.use("/user", userRouter);

app.listen(port, () => console.log("App started on port:", port));
