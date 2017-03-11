const express = require('express')

module.exports = function(server){
    //API rotas
    const router = express.Router()
    server.use('/api', router)
    //App rotas
    const todoService = require('../api/todo/todoService')
    todoService.register(router, '/todos')
}