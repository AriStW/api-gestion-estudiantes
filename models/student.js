const mongoose = require('mongoose');
const nameCourse = ["matematica","historia","ciencia", "arte"];

const Student = new mongoose.Schema({
nombre: { type: String, required: true },
apellido: { type: String, required: true},
email: { type: String, required: true },
curso: [{ type: String, enum: nameCourse ,required: true}]
},
{timestamps:{
createdAt: 'fechaCreacion',
updatedAt: 'fechaActualizacion'
}}
);

module.exports = mongoose.model('Estudiante', Student);
