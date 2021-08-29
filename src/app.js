'use strict'

const express = require('express');
const app = express();

const mongoose = require('mongoose');

const router = express.Router();

// const swaggerUI = require('swagger-ui-express');
// const swaggerDocs = require('./swagger.json');

const cors = require('cors');


// Conecta ao banco
// mongoose.connect('mongodb+srv://Patricia:MdbMongo135-*@cadastro.cwjil.mongodb.net/FormCadastro?retryWrites=true&w=majority');
mongoose.connect('mongodb+srv://deploy:uploaddeploy@cadastro.cwjil.mongodb.net/FormCadastro?retryWrites=true&w=majority');

// Carrega os modelos
const Client = require('./models/client');

// Carrega as rotas
const indexRoute = require('./routes/index-route');
const clientRoute = require('./routes/client-route');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use(express.json());
app.use(express.urlencoded());


// Habilita o CORS
app.use(cors());
// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
//     next();
// })

app.use('/', indexRoute);
app.use('/clients', clientRoute);
module.exports = app;