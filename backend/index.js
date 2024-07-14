const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Todo = require('./todoSchema');
const dbConnect = require('./dbConnect');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// DB connection
dbConnect();

app.get('/api/todos', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching todos', error });
    }
});

app.post('/api/todos', async (req, res) => {
    try {
        const { title, desc } = req.body;
        if (!title || !desc) {
            return res.status(400).json({ message: 'Title and description are required' });
        }
        const newTodo = new Todo({ title, desc });
        const savedTodo = await newTodo.save();
        res.status(201).json(savedTodo);
    } catch (error) {
        res.status(500).json({ message: 'Error adding todo', error });
    }
});

app.delete('/api/todos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting todo', error });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
