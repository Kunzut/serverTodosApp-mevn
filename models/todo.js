const { Schema, model } = require('mongoose')

const TodoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
})

const TodoModel = model('todos', TodoSchema)

module.exports = TodoModel