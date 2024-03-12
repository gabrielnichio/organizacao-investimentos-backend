import express from "express";
import investimentos from "./investimentosRoutes.js"

const routes = (app) => {
    app.get("/", (req, res) => res.status(200).send("Conectado no servidor do projeto de organização de investimentos"));
    app.use(express.json(), investimentos);
}

export default routes;