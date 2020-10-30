const TodoModel = require('../models/todo')

async function getTodos(req, res) {
    const todos = await TodoModel.find({})
    res.send(todos)
}

async function addTodo(req, res) {
    const todo = new TodoModel({
        title: req.body.title,
        category: req.body.category,
        completed: req.body.completed | false
    })
    await todo.save()
}

async function deleteTodo(req, res) {
    await TodoModel.findByIdAndDelete(req.body.id)
}

async function completedTodo(req, res) {
    const todo = await TodoModel.findById(req.body.id)
    todo.completed = req.body.completed
    await todo.save()
}

module.exports = {
    getTodos, addTodo, deleteTodo, completedTodo
}