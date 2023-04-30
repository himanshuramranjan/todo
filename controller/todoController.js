const catchAsyncError = require('../utils/catchAsyncError');

// Get All Todos (Home Page)
exports.getAllTodos = catchAsyncError(async (req, res, next) => {

    res.status(200).json({
        status: 'Success',
        message: 'Route not implemented yet'
    });
});

// Create a new Todo
exports.createTodo = catchAsyncError(async (req, res, next) => {
    res.status(200).json({
        status: 'Success',
        message: 'Route not implemented yet'
    });
});

// Update a Todo
exports.updateTodo = catchAsyncError(async (req, res, next) => {
    res.status(200).json({
        status: 'Success',
        message: 'Route not implemented yet'
    });
});

// Delete a Todo
exports.deleteTodo = catchAsyncError(async (req, res, next) => {
    res.status(200).json({
        status: 'Success',
        message: 'Route not implemented yet'
    });
});

