const productosServices = require('../services/productosServices');

module.exports = (app) =>{
    app.get(
        '/productos/getAll', (req,res) =>{
            let productos = productosServices.getAll();
            res.send(productos);
        }
    );

    app.get('/productos/getById/:id', (req, res) => {
        let producto = productosServices.getById(req.params.id);
        res.send(producto);
    });
}