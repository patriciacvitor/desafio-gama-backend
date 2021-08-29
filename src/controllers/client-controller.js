'use strict';

const mongoose = require('mongoose');
const Client = mongoose.model('Client');

exports.post = (req, res, next) => {
    var client = new Client(req.body); //(res.body);
    // client.nomeCompleto = req.body.name;
    // client.profissao = req.body.job;
    // client.cargoPretendido = req.body.job-position;
    // client.dataNascimento = req.body.birth-date;
    // client.estadoCivil = req.body.marital-status;
    // client.sexo = req.body.gender;
    // client.endereco = req.body.address;
    // client.bairro = req.body.district;
    // client.cidade = req.body.city;
    // client.estado = req.body.state;
    // client.cep = req.body.cep;
    // client.telFixo1 = req.body.phone1;
    // client.telFixo2 = req.body.phone2;
    // client.celular = req.body.mobile;
    // client.contato = req.body.contact;
    // client.email = req.body.email;
    // client.rg = req.body.rg;
    // client.cpf = req.body.cpf;
    // client.veiculo = req.body.vehicle;
    // client.cnh = req.body.cnh;

    client
        .save()
        .then(x => {
            res.status(201).send({
                message: 'Pessoa cadastrada com sucesso!'
            });
        }).catch(e => {
            res.status(400).send({
                message: 'Falha ao cadastrar pessoa.',
                data: e
            });
        });
};

exports.put = (req, res, next) => {
    const id = req.params.id;
    res.status(200).send({
        id: id,
        item: req.body
    });
};

exports.delete = (req, res, next) => {
    res.status(200).send(req.body);
};

