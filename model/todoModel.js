const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: [true, 'Todo topic is required']
    },
    detail: {
        type: String,
        required: [true, 'Topic detail is required']
    },
    date: {
        type: String,
        required: [true, 'Date is required for todo']
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;