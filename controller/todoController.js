const Todo = require('../model/todoModel');
const catchAsyncError = require('../utils/catchAsyncError');
const AppError = require('../utils/appError');

// Get All Todos (Home Page)
exports.getAllTodos = catchAsyncError(async (req, res, next) => {

    const todos = await Todo.find();

    res.status(200).json({
        status: 'Success',
        results: todos.length,
        title: 'Todos',
        todos
    });
});

// Create a new Todo
exports.createTodo = catchAsyncError(async (req, res, next) => {

    const todo = await Todo.create(req.body);

    res.status(201).json({
        status: 'Success',
        data : {
            todo
        }
    });
});

// Update a Todo
exports.updateTodo = catchAsyncError(async (req, res, next) => {

    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
        runValidators: true
    });

    if(!todo) {
        return next(new AppError('No Todo exist w/ this Id', 404));
    }

    res.status(200).json({
        status: 'Success',
        data: {
            todo
        }
    });
});

// Delete a Todo
exports.deleteTodo = catchAsyncError(async (req, res, next) => {
    
    const todo = await Todo.findByIdAndDelete(req.params.id);
    
    if(!todo) {
        return next(new AppError('No Todo exist w/ this Id', 404));
    }

    res.status(204).json({
        status: 'Success',
        message: 'Todo deleted successfully'
    });
});

