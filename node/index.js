const express = require('express');
const app = express();
const puerto = 3000;

const productosRoutes = require('./routes/productosRoutes');

productosRoutes(app);

app.listen(puerto);