const db = require('../model')

module.exports = {
    addTodo: async (req, res) => {
        console.log('In the Controller', req.user);

        const todo = req.body.todo
        // const userId = req.body.userId
        const result = await db.Todo.create({ todo: todo, user: req.user._id })
        res.send(result)
    },
    deleteTodo: async (req, res) => {
        try {
            const id = req.params.id
            const userId = req.user._id;
            console.log(id, userId);
            const result = await db.Todo.deleteOne({ _id: id })
            res.json(result)
            console.log('This is Result', result);
        } catch (e) {
            // res.json({ e, message: 'Didnt work' });
            res.status(400).json({ e, message: 'Didnt work' });
        }
    },
    allTodo: async (req, res) => {

        const userId = req.user._id
        const getAll = await db.Todo.find({ user: userId })
        res.json(getAll);
    },
    updateTodo: async (req, res) => {
        const id = req.params.id
        const todo = req.body.todo
        const updateTodo = await db.Todo.findOneAndUpdate({ _id: id },
            { todo: todo }, { new: true })
        res.json(updateTodo)
    }
}