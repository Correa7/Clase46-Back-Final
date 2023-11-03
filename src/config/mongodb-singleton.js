const {mongoUrl, dbName} = require ("./env.config");
const mongoose = require("mongoose");

class MongoSingleton {
    static #instance;

    constructor(){
        this.#connectMongoDB();
    };

    static getInstance(){
        if (this.#instance) {
            console.log("Ya se ha abierto una conexion a MongoDB.");
        } else {
            this.#instance = new MongoSingleton(); 
        }
        return this.#instance;
    };

    #connectMongoDB = async ()=>{
        try {
            await mongoose.connect(mongoUrl+dbName); 
            console.log("Conectado con exito a MongoDB usando Moongose.");
        } catch (error) {
            console.error("No se pudo conectar a la BD usando Moongose: " + error);
            process.exit();
        }
    };
}

module.exports = MongoSingleton 