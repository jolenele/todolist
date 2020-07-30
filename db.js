const { Pool } = require('pg');
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});

// Tasks
const getTasks = (req, res) => {
  pool.query('SELECT * FROM tasks ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const getTaskById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM tasks WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const createTask = (req, res) => {
  const { task, date, completed } = req.body;

  pool.query(
    'INSERT INTO tasks (task, date, completed) VALUES ($1, $2, $3)',
    [task, date, completed],
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
  const { task, date, completed } = req.body;

  pool.query(
    'UPDATE tasks SET task = $1, date = $2, completed = $3 WHERE id = $4',
    [task, date, completed, id],
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

  pool.query('DELETE FROM tasks WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Task deleted with ID: ${id}`);
  });
};

// Users
const getUsers = (req, res) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const createUser = (req, res) => {
  const { name } = req.body;

  pool.query(
    'INSERT INTO users (name) VALUES ($1)',
    [name],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User added with ID: ${results.insertId}`);
    }
  );
};
const updateUser = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;

  pool.query(
    'UPDATE users SET name = $1 WHERE id = $2',
    [name, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`User modified with ID: ${id}`);
    }
  );
};
const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
};

// Assign the same task for diffrent users
const getTodo = (req, res) => {
  pool.query('SELECT * FROM todolist ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const getTodoById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('SELECT * FROM todolist WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};
const createTodo = (req, res) => {
  const { tasks_id, users_id } = req.body;

  pool.query(
    'INSERT INTO todolist (tasks_id, users_id) VALUES ($1, $2)',
    [tasks_id, users_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`Assignment added with ID: ${result.insertId}`);
    }
  );
};
const updateTodo = (req, res) => {
  const id = parseInt(req.params.id);
  const { tasks_id, users_id } = req.body;

  pool.query(
    'UPDATE todolist SET  tasks_id = $1, users_id = $2 WHERE id = $3',
    [tasks_id, users_id, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).send(`Assignment modified with ID: ${id}`);
    }
  );
};
const deleteTodo = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query('DELETE FROM todolist WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`Assignment deleted with ID: ${id}`);
  });
};
module.exports = {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getTodo,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
