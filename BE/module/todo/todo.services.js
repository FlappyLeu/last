const { default: mongoose } = require("mongoose");
const Todo = require("./todo.model");

const createTodo = async (req) => {
  const todo = new Todo(req.body);
  return todo.save();
};

const getAllTodo = (req) => {
  return Todo.find();
};



module.exports = {
  createTodo,
  getAllTodo,
};
