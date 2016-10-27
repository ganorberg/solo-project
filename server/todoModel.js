const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  text: { type: String },
  id: { type: Number }
});

const TodoModel = mongoose.model('TodoModel', todoSchema);

module.exports = TodoModel;