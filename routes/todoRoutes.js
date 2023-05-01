const express = require('express');
const todoController = require('../controller/todoController');

const router = express.Router();

router
    .route('/')
    .get(todoController.getAllTodos)
    .post(todoController.createTodo)

router  
    .route('/remove/:id')
    .get(todoController.deleteTodo);

router
    .route('/:id')
    .get(todoController.getTodo)
    .post(todoController.updateTodo)

module.exports = router;

