const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const { errors } = require('celebrate');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/** Rota / Recurso */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação no back-end
 * POST:  Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

/**
 * Tipos de parametros:
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, Paginação)
 * Route Params: Parâmetros utilizando para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

/**
 * SQL: Mysql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSql: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */



module.exports = app;