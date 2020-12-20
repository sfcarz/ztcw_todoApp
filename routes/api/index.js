const router = require('express').Router()
const todoRoutes = require('./todo');
const User = require('./user');
// Has /user prepended to everything
router.use('/user', User);
router.use('/todo', todoRoutes);

router.get('/', (req, res) => {
  res.send('This is root index in api folder')
})

module.exports = router 
