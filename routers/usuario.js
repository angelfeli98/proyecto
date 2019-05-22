'use strict'

var express = require('express')

var usuarioController = require('../controllers/usuario')

var api = express.Router();

//api.get('/auto/:id?',autoController.prueba)

api.get('/loging',usuarioController.logingUsuario)
api.post('/usuario',usuarioController.saveUsuario)
api.get('/usuario',usuarioController.getUsuario)
api.put('/usuario/:token?',usuarioController.updateUsuario)
api.delete('/usuario/:token?',usuarioController.deleteUsuario)

module.exports = api;
