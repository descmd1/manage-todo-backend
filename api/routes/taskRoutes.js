// routes/taskRoutes.js
const express = require('express');
const router = express.Router();
const {
  getTasks,
  addTask,
  editTask,
  deleteTask,
  toggleTaskCompletion,
} = require('../controllers/taskController');

router.get('/tasks', getTasks);
router.post('/tasks', addTask);
router.put('/tasks/:id', editTask);
router.delete('/tasks/:id', deleteTask);
router.patch('/tasks/:id/completed', toggleTaskCompletion);

module.exports = router;
