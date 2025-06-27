import express from "express";
import bookRoutes from "./src/routes/book.routes.js";
import startDB from "./src/config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json);
app.use("/api/Book", bookRoutes);

startDB().then(()=>{app.listen(PORT, ()=>{
    console.log("Escuchando en el puerto: ", PORT);
})});