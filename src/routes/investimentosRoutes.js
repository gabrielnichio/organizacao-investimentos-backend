import express from "express"
import InvestimentosController from "../controllers/investimentosController.js"

const routes = express.Router();

routes.get("/investimentos", InvestimentosController.listaInvestimentos);
routes.get("/investimentos/:id", InvestimentosController.listaInvestimentosById);
routes.post("/investimentos", InvestimentosController.criaInvestimento);
routes.put("/investimentos/:id", InvestimentosController.atualizaInvestimento);
routes.delete("/investimentos/:id", InvestimentosController.deletaInvestimentos);

export default routes;