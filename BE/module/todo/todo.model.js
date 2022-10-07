const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo_title: {
    type: String,
    required: true,
  },
  todo_text: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
