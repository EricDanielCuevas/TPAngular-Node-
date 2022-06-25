//llamamos a la libreria que permite publicar y acceder a servicios
const express = require('express');
var bodyParser = require('body-parser');

//se crea una nueva instancia de express q será nuestra aplicación
const app = express();

//este es el puerto en el q la api está disponible
const puerto = 3000;

//llamamos al archivo productosRoutes
const productosRoutes = require('./routes/productosRoutes');

//con este middleware,  Angular puede consumir Node
app.use((req, res, next) => {
    //acepta cualquier url
    res.setHeader("Access-Control-Allow-Origin",
        "*");
    //acepta un request con estos tipos de cabeceras
    res.setHeader("Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept");

    //acepta un request con alguno de esos métodos
    res.setHeader("Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS");

    next();
});

//Le pasa express al archivo de Routes
productosRoutes(app);

//express se queda escuchando en el puerto declarado
app.listen(puerto);

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