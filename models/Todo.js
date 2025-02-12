class Todo {
    static todos = [];
    static lastId = 0;

    constructor({ title, completed = false }) {
        this.id = ++Todo.lastId;
        this.title = title;
        this.completed = completed;
        this.createdAt = new Date();
    }

    static find() {
        return Promise.resolve([...Todo.todos]);
    }

    static findById(id) {
        const todo = Todo.todos.find(t => t.id === parseInt(id));
        return Promise.resolve(todo);
    }

    static findByIdAndDelete(id) {
        const index = Todo.todos.findIndex(t => t.id === parseInt(id));
        if (index !== -1) {
            Todo.todos.splice(index, 1);
        }
        return Promise.resolve();
    }

    save() {
        const existingIndex = Todo.todos.findIndex(t => t.id === this.id);
        if (existingIndex !== -1) {
            Todo.todos[existingIndex] = this;
        } else {
            Todo.todos.push(this);
        }
        return Promise.resolve(this);
    }
}

module.exports = Todo;