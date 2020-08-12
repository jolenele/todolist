const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
// const db = require('./db');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' });
});

app.use('/api/tasks', require('./routers/tasks'));
app.use('/api/users', require('./routers/users'));
app.use('/api/todo', require('./routers/todo'));

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
