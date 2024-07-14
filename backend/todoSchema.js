const mongoose = require('mongoose');
 const todoSchema = new mongoose.Schema({
    title: String,
    desc: String
}, {
    collection: 'Todo'  // Explicitly set the collection name
});


 const Todo = mongoose.model('Todo', todoSchema);
 module.exports = Todo;