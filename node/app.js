'use strict'
 
// Cargar modulos de node para ejecutar el servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http) 
var app = express();

// Cargar ficheros rutas

var cognito = require('./routes/cognito');

// Middlewares
app.use(bodyParser.urlencoded({extended : false}));

// convierte cualquier petición en un objeto json que sea mas simple de leer

app.use(bodyParser.json());

// CORS

// Añadir prefijos a las rutas / Cargar rutas

app.use('/api', cognito);

// Exportar modulo (fichero actual)
module.exports = app;