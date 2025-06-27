import { Where } from "sequelize";
import Book from "../models/book.model.js";

export const createBook = async(req, res) => {
    const {title, autor, pages, genre, description } = req.body;

    try {
    if(title === undefined || title === "") return res.status(400).json({Message: "Debe completar el titulo del libro."})
    if(autor === undefined || autor === "") return res.status(400).json({Message: "Debe completar el nombre del autor del libro."})
    if(pages === undefined || pages === "") return res.status(400).json({Message: "Debe completar el número de páginas del libro."})
    if(genre === undefined || genre === "") return res.status(400).json({Message: "Debe completar el género literario del libro."})

    const bookInt = Math.floor(bookInt)
    if(pages !== bookInt) return res.status(400).json({Message: "El número de paginas del libro tiene que ser un número entero positivo."})

    const createBook = await Book.create({title, autor, pages, genre, description })
    res.status(200).json({Message: "El libro fue creado con exito", createBook});
    } catch (error) {
        console.log("Error al crear el libro");
        res.status(500).json({Message: "Error al crear el libro", error})
    }

}

export const updatedBook = async(req, res) => {
    const { title, autor, pages, genre, description } = req.body;
    try {
        const [updated] = await Book.update({
            title, autor, pages, genre, description
        },
    {
        where: {id: req.params.id}
    });
    } catch (error) {
        console.log("Error al actualizar la información");
        res.status(500).json({Message: "Error al actualizar la información del libro", error})
    }
}