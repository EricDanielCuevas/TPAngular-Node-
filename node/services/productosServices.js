const productosEnLaBaseDeDatos = [
    { id: 1, nombre: 'Chocolate', marca: 'Arcor', titulo: 'chocolate blanco', precio: 233.2, imagen: './assets/arcor_miel_menta_bolsa.png' },

    { id: 2, nombre: 'Caramelos', marca: 'Arcor', titulo: 'menta cristal', precio: 233.2, imagen: './assets/arcor_menta_bolsa.png' },

    { id: 3, nombre: 'Chupetines', marca: 'Lipo', titulo: 'sabor a naranja', precio: 233.2, imagen: './assets/arcor_miel_menta_bolsa.png' },

    { id: 4, nombre: 'Chocolate', marca: 'Milka', titulo: ' chocolate negro', precio: 233.2, imagen: './assets/arcor_menta_bolsa.png' },

    { id: 5, nombre: 'Barritas', marca: 'Arcor', titulo: 'avena con chocolate', precio: 233.2, imagen: './assets/arcor_miel_menta_bolsa.png' }
];

const getAll = (valorBusqueda) => {
    if (valorBusqueda != "" && valorBusqueda != undefined) {
        return productosEnLaBaseDeDatos.filter(p =>
            //el include es como el like
            p.marca.toUpperCase().includes(valorBusqueda.toUpperCase(valorBusqueda)));
    }
    else {
        return productosEnLaBaseDeDatos;
    }
}

const getById = (id) => {
    return productosEnLaBaseDeDatos.find(producto => producto.id == id);
}

module.exports = { getAll, getById }