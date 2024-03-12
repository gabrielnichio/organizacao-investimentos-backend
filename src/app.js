import express from "express";
import connectDatabase from "./config/dbConnection.js";
import routes from "./routes/index.js";

const connection = await connectDatabase()

connection.on("error", (error) => {
    console.error("erro de conexão", error);
})

connection.once("open", () => {
    console.log("Conectado")
})

const app = express();

routes(app);

export default app;