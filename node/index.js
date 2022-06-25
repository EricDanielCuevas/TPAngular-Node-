//llamamos a la libreria que permite publicar y acceder a servicios
const express = require('express');

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