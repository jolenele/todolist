const { Pool } = require('pg');
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});

const getTasks = (req, res) => {
  pool.query('SELECT * FROM todolist ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM todolist WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const createTask = (req, res) => {
  const { tasks, date } = req.body;

  pool.query(
    'INSERT INTO todolist (tasks, date) VALUES ($1, $2)',
    [tasks, date],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Task added with ID: ${result.insertId}`);
    }
  );
};
const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const { tasks, date } = req.body;

  pool.query(
    'UPDATE todolist SET tasks = $1, date = $2 WHERE id = $3',
    [tasks, date, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Task modified with ID: ${id}`);
    }
  );
};
const deleteTask = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM todolist WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Task deleted with ID: ${id}`);
  });
};

module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
};
