import express from "express";
import {createBook, getAllBook, getBookById, updatedBook, deleteBook} from "../controllers/book.controllers.js";

const router = express.Router();

router.post("/book", createBook);
router.get("/book", getAllBook);
router.put("/book/:id", updatedBook);
router.get("/book/:id", getBookById);
router.delete("/book/:id", deleteBook);

export default router;