import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Book = sequelize.define("books", {
    id: {
        type: DataTypes.INTEGER(10),
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true //Nombre único (?)
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
})

export default Book;