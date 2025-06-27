import express from "express";
import {createBook, getAllBook, getBookById, updateBook, deleteBook} from "..controllers/book.controllers.js";
import { DECIMAL } from "sequelize";

const router = express.Router();

router.post("/createBook", createBook);
router.get("/createBook", getAllBook);
router.get("/createBook", getBookById);
router.put("/createBook", updateBook);
router.delete("/createBook", deleteBook);

export default router;