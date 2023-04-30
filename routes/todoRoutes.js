const express = require('express');
const todoController = require('../controller/todoController');

const router = express.Router();


router
    .route('/')
    .get(todoController.getAllTodos)
    .post(todoController.createTodo)
    .patch(todoController.updateTodo)
    .delete(todoController.deleteTodo)

module.exports = router;

