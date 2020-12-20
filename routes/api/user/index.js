const router = require('express').Router()
const User = require('../../../controller/userController');

router.post('/', User);
router.get('/', User);
router.get('/:Id', User);
router.patch('/:Id', User);
router.delete('/:Id', User);

module.exports = router 
