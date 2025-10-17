const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todosController");

router.get("/", todosController.getTodos);
router.post("/", todosController.addTodos);
router.delete("/:id", todosController.deleteTodos);

module.exports = router;
