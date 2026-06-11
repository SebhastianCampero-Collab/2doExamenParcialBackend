import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server"

let mongoMemoryServer;

export async function connectDB() {
    try {
        console.log("Intentando conectar a Mongo");
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeOutMS: 2000
        }),
            console.log("Mongo DB conectado")
    } catch (error) {
        console.error("Error conectando a Mongo")
        try {
            mongoMemoryServer = await MongoMemoryServer.create();
            const uri = mongoMemoryServer.getUri();
            await mongoose.connect(uri);
            console.log("Servidor interno de mongo activo");
        } catch (localError) {
            console.error("Error al iniciar mongo local");
            process.exit(1);
        }
    }
}