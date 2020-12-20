const { Schema, model } = require('mongoose');

const todoSchema = new Schema({
  todo: {
    type: String,
    required: [true, 'Enter Text'],
    trim: true,
  },
  user: { 
    type: Schema.Types.ObjectId, 
    ref: 'User'}
}, {
  timestamps: true,
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;