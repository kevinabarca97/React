const mongoose = require('mongoose');

const conexion  = async() =>{
    try {
        await mongoose.connect(process.env.mongoDB);

        console.log("conectado a Atlas MongoDB");
    } catch(error) {
        console.warn(error);
        throw new Error("No se ha podido conectar a la db");

    }
}

module.exports = {
    conexion
}