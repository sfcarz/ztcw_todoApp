require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
require('./services/passport');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Yee'))
  .catch(e => console.log('root index line 13', e));

// mongoose.set('debug', true);

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(process.env.PORT, () => {
  console.log('Server started listening on http://localhost:3001', PORT);
});
