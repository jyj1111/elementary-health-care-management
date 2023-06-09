import express from "express";
import { myDataBase } from "./db";
import AuthRouter from "./router/Auth";
import PostsRouter from "./router/posts";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
export const tokenList = {};
myDataBase
  .initialize()
  .then(() => {
    console.log("DataBase has been initialized!");
  })
  .catch((err) => {
    console.error("Error during DataBase initialization:", err);
  });

app.use(express.json());
app.use(express.urlencoded());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // 모두 허용
  })
);
app.use(cookieParser());
app.use("/auth", AuthRouter);
app.use("/posts", PostsRouter);
app.listen(3000, () => {
  console.log("listen");
});
