const Todo = require('../models/Todo');

const todoController = {
    getAllTodos: async (req, res) => {
        try {
            const todos = await Todo.find();
            todos.sort((a, b) => b.createdAt - a.createdAt);
            res.render('index', { todos });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    createTodo: async (req, res) => {
        try {
            const todo = new Todo({
                title: req.body.title
            });
            await todo.save();
            res.redirect('/');
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    toggleTodo: async (req, res) => {
        try {
            const todo = await Todo.findById(req.params.id);
            if (!todo) {
                return res.status(404).json({ message: 'Todo not found' });
            }
            todo.completed = !todo.completed;
            await todo.save();
            res.redirect('/');
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    deleteTodo: async (req, res) => {
        try {
            await Todo.findByIdAndDelete(req.params.id);
            res.redirect('/');
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = todoController;