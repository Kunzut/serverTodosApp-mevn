const express = require('express')
const mongoose = require('mongoose')
const bodyParser  = require('body-parser')
const cors = require('cors')
const config = require('./config')
const { getTodos, addTodo, deleteTodo, completedTodo } = require('./routes/todos')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/api/todos', getTodos)
app.post('/api/todos/add', addTodo)
app.post('/api/todos/delete', deleteTodo)
app.post('/api/todos/completed', completedTodo)

async function start() {
    try {
        await mongoose.connect(config.URLdb, config.ConfigDb)
        app.listen(config.PORT, () => {
            console.log(`Server has been started on port ${config.PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()