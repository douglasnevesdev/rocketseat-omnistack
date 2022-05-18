const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost:27017/omnistack', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());
app.use(routes);

//Metodos HTTP:  GET, POST, PUT, DELETE

//Tipos de Parâmetros
// Query Params: req.query (Filtros, ordenação, paginação,...)
// Route Params: req.params (Identificar um recurso na alteração ou remoção) 
// Body: request.body (Dados para criação ou alteração de um registro)

//MongoDB (Não-relacional)

app.listen(3333);