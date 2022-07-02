const productosRoutes = require('../routes/productosRoutes');

const productosEnLaBaseDeDatos=[
    { id: 1, clasificacion: 'Chocolate', marca: 'Arcor',descripcion: 'chocolate blanco', precio: 233.2, cantidad: 1, disponible: true, imagen: './assets/arcor_miel_menta_bolsa.png' },

    { id: 2, clasificacion: 'Caramelos', marca: 'Arcor', descripcion: 'menta con chocolate x 200 GR', precio: 233.2, cantidad: 1, disponible: true,imagen: './assets/arcor_menta_bolsa.png' },

    { id: 3, clasificacion: 'Chupetines', marca: 'Lipo', descripcion: 'sabor a naranja', precio: 233.2, cantidad: 1, disponible: true,imagen: './assets/arcor_miel_menta_bolsa.png' },

    { id: 4, clasificacion: 'Chocolate', marca: 'Milka', descripcion: ' chocolate negro', precio: 233.2, cantidad: 1, disponible: true,imagen: './assets/arcor_menta_bolsa.png' },

    { id: 5, clasificacion: 'Barritas', marca: 'Arcor', descripcion: 'avena con chocolate', precio: 233.2, cantidad: 1, disponible: true,imagen: './assets/arcor_miel_menta_bolsa.png' }
];

const productospromo=[
    { id: 6, clasificacion: 'combo-seños', marca: 'combo', descripcion: 'Cereal arcor, alfajor jorgito, jugo cepita, 25 caramelos surtidos, tableta beldent, cofler mini', precio: 510.0, cantidad: 1, disponible: true,imagen: './assets/combo-seños.png' },
    
    { id: 7, clasificacion: 'combo-cole', marca: 'combo', descripcion: 'Cereal arcor, alfajor jorgito, jugo cepita, 25 caramelos surtidos, tableta beldent, cofler mini', precio: 510.0, cantidad: 1, disponible: true,imagen: './assets/combo-cole.png' },

    { id: 8, clasificacion: 'combo-facu', marca: 'combo', descripcion: 'Cereal arcor, alfajor jorgito, jugo cepita, 25 caramelos surtidos, tableta beldent, cofler mini', precio: 510.0, cantidad: 1, disponible: true,imagen: './assets/combo-facu.png' },

    { id: 9, clasificacion: 'combo-ofi', marca: 'combo', descripcion: 'Cereal arcor, alfajor jorgito, jugo cepita, 25 caramelos surtidos, tableta beldent, cofler mini', precio: 510.0, cantidad: 1, disponible: true,imagen: './assets/combo-ofi.png' },

];

const productoscandy=[
    { id: 10, clasificacion: 'Casamiento', marca: 'candy', descripcion: 'Caramelos 3 sabores a elección., Gomitas 3 sabores a elección, Chupetines Picodulce., Alfajores Jorgito, Tita & Rhodesia', precio: 39000, cantidad: 1, comen: '60 personas', disponible: true,imagen: './assets/candy-bar-casamiento.jpg' },

    { id: 11, clasificacion: 'Quince', marca: 'candy', descripcion: 'Caramelos 3 sabores a elección., Gomitas 3 sabores a elección, Chupetines Picodulce., Alfajores Jorgito, Tita & Rhodesia', precio: 32000, cantidad: 1,comen: '50 personas', disponible: true,imagen: './assets/candy-bar-xv.jpg' },

    { id: 12,clasificacion: 'Bautismo', marca: 'candy', descripcion: 'Caramelos 3 sabores a elección., Gomitas 3 sabores a elección, Chupetines Picodulce., Alfajores Jorgito, Tita & Rhodesia', precio: 33000, cantidad: 1, comen: '40 personas',disponible: true,imagen: './assets/candy-bar-bautismo.jpg' }  
];

const { Producto } = require('../models/productos');

// const getAll = (valorBusqueda) => {
//     var productos = Producto.find();
    
//     if (valorBusqueda != "" && valorBusqueda != undefined) {
//         return productosEnLaBaseDeDatos.filter(p =>
//             //el include es como el like
//             p.marca.toUpperCase().includes(valorBusqueda.toUpperCase(valorBusqueda)));
//     }
//     else {
//         return productosEnLaBaseDeDatos;
//     }
// }

const getAll = async () => {
    var productos = await Producto.find();
    return productos;
}

const getById = (id) => {
    return productosEnLaBaseDeDatos.find(producto => producto.id == id);
}

const createProducto = (producto) => {

    let marca = producto.marca;
    let descripcion = producto.descripcion;
    let precio = producto.precio;
    let cantidad = producto.cantidad;
    let imagen = producto.imagen;
    console.log(producto);
    return producto;
}

const editProducto = (producto) => {

    let id = producto.id;
    console.log(id)
    let marca = producto.marca;
    console.log(marca)
    let descripcion = producto.descripcion;
    let precio = producto.precio;
    let cantidad = producto.cantidad;
    let imagen = producto.imagen;
    console.log(producto);

    return producto;
}

const deleteProducto = (id) => {

    console.log(id);
}

module.exports = { getAll, getById, createProducto, editProducto, deleteProducto }