import mongoose, { Schema } from "mongoose";

const investimentoSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    numero: { type: Number, required: true },
    titulo: { type: String, required: true },
    valor: { type: Number, required: true },
    quantidade: { type: Number, required: true },
}, { versionKey: false });

const organizacao = mongoose.model("organizacao", investimentoSchema);

export default organizacao;