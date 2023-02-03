const mongoose = require('mongoose');
const PetSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, 'Debe ingresar un nombre'],
        minlength: [3, 'El nombre debe tener al menos 3 caracteres']
    },
    type: { 
        type: String,
        required: [true, 'Se requiere tipo'],
        minlength: [3, 'El tipo debe tener al menos 3 caracteres']

     },
    description: {
        type: String,
        required: [true, 'Se requiere descripcion'],
        minlength: [3, 'La descripción debe tener al menos 3 caracteres']
    },
    skill1: {
        type: String,
    },
    skill2: {
        type: String,
    },
    skill3: {
        type: String,
    },
    likes: {
        type: Number,
    }

}, {timestamps: true });

module.exports.Pet = mongoose.model('Pet', PetSchema);