import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import  connectDB  from "./config/db.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import userRouter from "./Routes/UserRouter.js";
import moviesRouter from "./Routes/MoviesRouter.js";
import categoriesRouter from "./Routes/CategoriesRouter.js";
import Uploadrouter from "./Controllers/UploadFile.js";
import path from "path"
import { fileURLToPath } from "url";

dotenv.config();


// connect DB
connectDB();


// es module fix
const __filename = fileURLToPath(import.meta.url)

const __dirname = path.dirname(__filename)

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, './client/build')))

// other routes
app.use("/api/users", userRouter);
app.use("/api/movies", moviesRouter);
app.use("/api/categories", categoriesRouter);
app.use("/api/upload", Uploadrouter);

// error handling middleware
app.use(errorHandler);


// Main route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

app.get("*", function(req, res)  {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running is ${process.env.PORT} ${PORT}`);
});
