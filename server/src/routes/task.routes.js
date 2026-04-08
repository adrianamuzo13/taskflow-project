const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');

// Definición de rutas
router.get('/', taskController.getAll);
router.post('/', taskController.create);
router.delete('/:id', taskController.remove);

module.exports = router;