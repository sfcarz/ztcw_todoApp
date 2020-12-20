const jwt = require('jsonwebtoken');
const { User } = require('../model');

const tokenForUser = (id) => {
  return jwt.sign({
    sub: id,
    iat: new Date().getTime()
  }, process.env.JWT_SECRET);
};

module.exports = {
  signIn: (req, res) => {
    console.log('I AM THE LOGGED IN USER', req.user);
    // res.json(tokenForUser(req.user._id));
    res.json({
      token: tokenForUser(req.user._id),
      user: req.user.username
    })
  },

  signUp: async (req, res) => {
    const { firstName, lastName, username, password } = req.body;
    console.log(req.body);
    try {
      const user = await User.create({ firstName, lastName, username, password });
      console.log('I AM THE ID', user.id);
      res.json({
        token: tokenForUser(user.id),
        user: user.username
      });
    } catch (e) {
      console.log(e);
      res.status(400)
        .json(e);
    }
  },

  signOut: (req, res) => {
    req.logOut();
    res.json({ success: 'You are now logged out' });
  },
  
};
