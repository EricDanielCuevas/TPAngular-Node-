//llamamos a la libreria que permite publicar y acceder a servicios
const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

//se crea una nueva instancia de express q será nuestra aplicación
const app = express();

//este es el puerto en el q la api está disponible
const puerto = 3000;

app.use(cors());
app.use(express.json());
//llamamos al archivo productosRoutes
const productosRoutes = require('./routes/productosRoutes');

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

// Añadir prefijos a las rutas / Cargar rutas
app.use('/api', cognito);

// Exportar modulo (fichero actual)
module.exports = app;