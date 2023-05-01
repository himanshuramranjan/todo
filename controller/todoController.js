const Todo = require('../model/todoModel');
const catchAsyncError = require('../utils/catchAsyncError');
const AppError = require('../utils/appError');

// Get All Todos (Home Page)
exports.getAllTodos = catchAsyncError(async (req, res, next) => {

    const todos = await Todo.find();

    res.status(200).render('home', {
        status: 'Success',
        todos
    });
});

// Get a single Todo
exports.getTodo = catchAsyncError(async (req, res, next) => {

    const todo = await Todo.find({_id: req.params.id});
    
    res.status(200).render('update', {
        status: 'Success',
        todo
    });
});

// Create a new Todo
exports.createTodo = catchAsyncError(async (req, res, next) => {

    const todo = await Todo.create(req.body);
    res.status(201).redirect('/api/v1/todo');
});

// Update a Todo
exports.updateTodo = catchAsyncError(async (req, res, next) => {

    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);

    if(!todo) {
        return next(new AppError('No Todo exist w/ this Id', 404));
    }

    res.status(200).redirect('/api/v1/todo');
});

// Delete a Todo
exports.deleteTodo = catchAsyncError(async (req, res, next) => {
    
    const todo = await Todo.findByIdAndDelete(req.params.id);
    
    if(!todo) {
        return next(new AppError('No Todo exist w/ this Id', 404));
    }

    res.status(204).redirect('/api/v1/todo');
});

