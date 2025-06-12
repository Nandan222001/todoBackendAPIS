const express = require('express');
const router = express.Router();

const {createTodo} = require('../controllers/createTodo');
const { getTodo,getTodoByID } = require('../controllers/getTodo');
const {deleteTodo} = require('../controllers/deleteTodo');
const {updateTodo} = require('../controllers/updateTodo');

router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.delete('/deleteTodo/:id',deleteTodo);
router.get('/getTodoByID/:id',getTodoByID);
router.put('/updateTodo/:id',updateTodo);

module.exports = router;