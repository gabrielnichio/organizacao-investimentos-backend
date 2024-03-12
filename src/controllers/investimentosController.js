import organizacao from "../models/Investimento.js"
//github

class InvestimentosController {

    static async listaInvestimentos(req, res) {
        try {
            const investimentos = await organizacao.find({});
            res.status(200).json(investimentos);
        } catch (e) {
            res.status(500).send({ message: `${e.message} - falha na requisição` })
        }
    }

    static async listaInvestimentosById(req, res) {
        try {
            const id = req.params.id;
            const investimentoEncontrado = await organizacao.findById(id);
            res.status(200).json(investimentoEncontrado);
        } catch (e) {
            res.status(500).send({ message: `${e.message} - falha na requisição` })
        }
    }

    static async criaInvestimento(req, res) {
        try {
            const novoInvestimento = await organizacao.create(req.body);
            res.status(200).json({ message: "Investimento criado com sucesso", investimento: novoInvestimento });
        } catch (e) {
            res.status(500).json({ message: `${e.message} - falha na criação` })
        }
    }

    static async atualizaInvestimento(req, res) {
        try {
            const id = req.params.id;
            const investimentoAtualizado = await organizacao.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado"});
        } catch (e) {
            res.status(500).send({ message: `${e.message} - falha na atualização` })
        }
    }

    static async deletaInvestimentos(req, res) {
        try {
            const id = req.params.id;
            await organizacao.findByIdAndDelete(id);
            res.status(200).send("Investimento excluído");
        } catch (e) {
            res.status(500).send({ message: `${e.message} - falha na exclusão` })
        }
    }
}

export default InvestimentosController;