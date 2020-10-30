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

module.exports = {
    getTodos, addTodo
}