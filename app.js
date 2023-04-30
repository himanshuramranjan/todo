const express = require('express');

const AppError = require('./utils/appError');
const todoRouter = require('./routes/todoRoutes');
const errorHandler = require('./controller/errorControler');

const app = express();

// MIDDLEWARES

app.use(express.json({ limit: '10kb'}));



// ROUTES
app.use('/api/v1/todo', todoRouter);

app.use('*', (req, res, next) => {
    next(new AppError(`Cant find ${req.originalUrl}`, 404));
});


// Global Error Handler
app.use(errorHandler);
module.exports = app;