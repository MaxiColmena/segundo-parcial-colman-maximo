import sequelize from "../config/database.js";

const startDB = async() => {
    try {
        await sequelize.authenticate();
        console.log("Conectado a la base de datos con éxito.");
    } catch (error) {
        console.log("Error al conectarse a la base de datos.", error);
    }
}

export default startDB;