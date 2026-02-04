import mongoose from "mongoose"
import { nanoid } from "nanoid"

const ClientSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: () => nanoid(8)
    },
    name: {
        type: String,
        require: true
    },
    cpf: {
        type: String,
        unique: true,
        trim: true,
        
        set: valor => valor.replace(/\D/g, ''),
        match: [/^\d{11}$/, 'Por faqvor digite um cpf valido']
    },
    telefone: {
        type: String,
        trim: true,
        set: valor => valor.replace(/\D/g, ''),
        match: [/^\d{11}$/, 'Por favor digite um número valido']
    },
    email: {
        type: String,
        unique: true,
        trim: true,   
        lowercase: true, 
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, preencha um e-mail válido']

    }
})  

export const Client = mongoose.model("Client", ClientSchema)

