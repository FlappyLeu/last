const todoServices = require("./todo.services");

const createTodo = async (req, res) => {
  try {
    const todo = await todoServices.createTodo(req);
    res.json({
      data: todo,
    });
  } catch (error) {
    res.json({
      error: error,
    });
  }
};


const getAllTodo = async (req, res) => {
  const book = await todoServices.getAllTodo(req);
  res.json({
    data: book,
  });
};



module.exports = {
  createTodo,
  getAllTodo,
  
};
