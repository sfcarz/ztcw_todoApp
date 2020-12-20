const router = require('express').Router()
const { addTodo, deleteTodo, allTodo, updateTodo } = require('../../../controller/toDoController');
const authorizationMiddleware = require('../../../middlewares/authorizationMiddleware');

router.get('/', authorizationMiddleware, allTodo);
router.post('/', authorizationMiddleware, addTodo);
router.delete('/:id', authorizationMiddleware, deleteTodo);
router.patch('/:id', authorizationMiddleware, updateTodo);

module.exports = router