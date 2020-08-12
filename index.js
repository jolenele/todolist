const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const db = require('./db');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

// Routes tasks
app.get('/tasks', db.getTasks);
app.get('/tasks/:id', db.getTaskById);
app.post('/tasks', db.createTask);
app.put('/tasks/:id', db.updateTask);
app.delete('/tasks/:id', db.deleteTask);
// Routes users
app.get('/users', db.getUsers);
app.get('/users/:id', db.getUserById);
app.post('/users', db.createUser);
app.put('/users/:id', db.updateUser);
app.delete('/users/:id', db.deleteUser);
//Routes todolist
app.get('/todolist', db.getTodo);
app.get('/todolist/:id', db.getTodoById);
app.post('/todolist', db.createTodo);
app.put('/todolist/:id', db.updateTodo);
app.delete('/todolist/:id', db.deleteTodo);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
