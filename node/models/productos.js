const mongoose = require('mongoose');

const Producto = mongoose.model('producto', {
    nombre: {
        type: String,
        required: [true, "El apellido del usuario es obligatorio"]
    },
    marca: {
        type: String,
        required: [true, "El email del usuario es obligatorio"]
    },
    descripcion: {
        type: String,
        required: [true, "La contrasena del usuario es obligatoria"]
    },
    precio: {
        type: String,
        required: [true, "La direccion del usuario es obligatoria"]
    },
    cantidad: {
        type: String,
        required: [true, "La direccion del usuario es obligatoria"]
    },
    disponible: {
        type: String,
        required: [true, "La direccion del usuario es obligatoria"]
    },
    imagen: {
        type: String,
        required: [true, "La direccion del usuario es obligatoria"]
    }
});

module.exports = { Producto };