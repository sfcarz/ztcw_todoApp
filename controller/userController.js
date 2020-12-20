const router = require('express').Router();
const User = require('../model/user')

module.exports ={}
// get all posts
router.get('/', async (req, res) => {
  try {
    const request = await User.find();
    res.json(request);
  } catch (err) {
    res.json({ message: err })
  }
});
// Post new info
router.post('/', async (req, res) => {
  const incoming = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password
  });

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const userName = req.body.username;
  const userId = incoming._id;

  console.log('This is a post send', firstName, lastName, userName);
  console.log('This is a new POST', incoming);
  console.log('This is a New POST with userID', userId);

  try {
    const userSaved = await incoming.save()
    res.json(userSaved);
  } catch (e) {
    throw new Error(e);
  }
});
// get Specific post
router.get('/:Id', async (req, res) => {
  // console.log(req.params.Id);
  try {
    const userId = await User.findById(req.params.Id)
    res.json(userId);
  } catch (e) {
    res.json({ message: e })
  }
})
// Delete specific post
router.delete('/:Id', async (req, res) => {
  try {
    const deleted = await User.deleteOne({ _id: req.params.Id })
    res.json(deleted);
  } catch (e) {
    res.json({ message: e })
  }
})
// Update specific post
router.patch('/:Id', async (req, res) => {
  try {
    const update1 = await User.updateOne(
      { _id: req.params.Id },
      { $set: { username: req.body.username }, }
    );
    res.json(update1)
  } catch (e) {
    res.json({ message: e })
  }
})

module.exports = router;