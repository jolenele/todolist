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

// Routes
app.get('/tasks', db.getTasks);
app.get('/tasks/:id', db.getTaskById);
app.post('/tasks', db.createTask);
app.put('/tasks/:id', db.updateTask);
app.put('/tasks/:id', db.deleteTask);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
