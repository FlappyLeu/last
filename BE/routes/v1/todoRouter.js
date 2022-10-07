const express = require("express");
const router = express.Router();
const todoController = require("../../module/index");

router.get("/", todoController.getAllTodo);
router.post("/", todoController.createTodo);


module.exports = router;
