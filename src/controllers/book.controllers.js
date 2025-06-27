import { where } from "sequelize";
import Book from "../models/book.model.js";

export const createBook = async(req, res) => {
    const {title, autor, pages, genre, description } = req.body;

    try {
    if(title === undefined || title === "") return res.status(400).json({Message: "Debe completar el titulo del libro."});
    if(autor === undefined || autor === "") return res.status(400).json({Message: "Debe completar el nombre del autor del libro."});
    if(pages === undefined || pages === "") return res.status(400).json({Message: "Debe completar el número de páginas del libro."});
    if(genre === undefined || genre === "") return res.status(400).json({Message: "Debe completar el género literario del libro."});

    const pageNumber = Number(pages);
if (!Number.isInteger(pageNumber) || pageNumber <= 0) {
  return res.status(400).json({Message: "El número de páginas debe ser un número entero positivo."});
}

    // const bookInt = Math.floor(bookInt)
    // if(pages !== bookInt) return res.status(400).json({Message: "El número de paginas del libro tiene que ser un número entero positivo."})

    // const bookCreate = await Book.create({title, autor, pages, genre, description })
    const bookCreate = await Book.create({ title, autor, pages: pageNumber, genre, description });

    res.status(200).json({Message: "El libro fue creado con exito", bookCreate});
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
    res.status(200).json({Message: "se actualizó correctamente la información"});
    } catch (error) {
        console.log("Error al actualizar la información");
        res.status(500).json({Message: "Error al actualizar la información del libro", error})
    }
}

export const getAllBook = async(req,res)=>{
    try {
        const getBookAll = await Book.findAll()
    res.status(200).json({Message: "El libro fue creado con exito", getBookAll});
    } catch (error) {
        console.log("Error al traer la información de todos los libros");
        res.status(500).json({Message: "Error al traer la información de todos los libro", error})
    }
}

export const getBookById = async(req,res)=>{
    try {
        const getByIdBook = await Book.findByPk(req.params.id);
    res.status(200).json({Message: "El libro fue creado con exito", getByIdBook});
    } catch (error) {
        console.log("Error al actualizar la información");
        res.status(500).json({Message: "Error al actualizar la información del libro", error})
    }
}

export const deleteBook = async(req,res)=>{
    try {
        const bookDelete = await Book.destroy({
            where: {id: req.params.id}
        });
    res.status(200).json({Message: "El libro fue creado con exito", bookDelete});
    } catch (error) {
        console.log("Error al eliminar el libro");
        res.status(500).json({Message: "Error al eliminar la información del libro de la base de datos", error})
    }
}