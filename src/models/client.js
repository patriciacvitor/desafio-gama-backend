'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    // _id
    nomeCompleto: {
        type: String,
        required: true,
        trim: true,
    },
    profissao: {
        type: String,
        required: true,
        trim: true
    },
    cargoPretendido: {
        type: String,
        required: false,
        trim: true,
    },
    dataNascimento: {
        type: Date,
        required: true,
        // trim: true,
    },
    estadoCivil: {
        type: String,
        required: false,
        // trim: true,
    },
    sexo: {
        type: String,
        required: false,
        // trim: true,
    },
    endereco: {
        type: String,
        required: true,
        trim: true,
    },
    bairro: {
        type: String,
        required: true,
        trim: true,
    },
    cidade: {
        type: String,
        required: true,
        trim: true,
    },
    estado: {
        type: String,
        required: true,
        // trim: true,
    },
    cep: {
        type: Number,
        required: true,
        trim: true,
    },
    telFixo1: {
        type: Number,
        required: false,
        trim: true,
    },
    telFixo2: {
        type: Number,
        required: false,
        trim: true,
    },
    celular: {
        type: Number,
        required: true,
        trim: true,
    },
    contato: {
        type: String,
        required: false,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
    },
    rg: {
        type: Number,
        required: true,
        trim: true,
    },
    cpf: {
        type: Number,
        unique: true,
        required: true,
        trim: true,
    },
    veiculo: {
        type: String,
        required: false,
        // trim: true,
    },
    cnh: {
        type: String,
        required: false,
        // trim: true,
    },
});

module.exports = mongoose.model('Client', schema);

