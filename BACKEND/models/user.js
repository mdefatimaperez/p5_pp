const mongoose = require('mongoose');

const user = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    minlength: 2
  },
  apellido: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  contraseña: {
    type: String,
    required: true
  },
   favoritos:{
    type: String
   }
});

module.exports = mongoose.model('User', user);