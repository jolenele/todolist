const app = require('express');
const router = app.Router();
const controllers = require('../crud.controllers');
const table = 'tasks';
const col1 = 'task';
const col2 = 'date';

// /api/tasks
router
  .route('/')
  .get(controllers.getAll(table))
  .post(controllers.addItem(table, col1, col2));

// /api/tasks/:id
router
  .route('/:id')
  .get(controllers.getOne(table))
  .put(controllers.updateItem(table, col1, col2))
  .delete(controllers.deleteItem(table));

module.exports = router;
