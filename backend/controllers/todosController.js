const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/todos.json");

function readTodos() {
  const data = fs.readFileSync(dataPath, "utf-8");
  return JSON.parse(data);
}

function writeTodos(data) {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
}

exports.getTodos = (req, res) => {
  const todos = readTodos();
  res.json(todos);
};

exports.addTodos = (req, res) => {
  const todos = readTodos();
  const newtodo = {
    id: Date.now(),
    title: req.body.title,
    done: false,
  };
  todos.push(newtodo);
  writeTodos(todos);
  res.status(201).json(newtodo);
};

exports.deleteTodos = (req, res) => {
  const todos = readTodos();
  const id = parseInt(req.params.id);
  const updated = todos.filter((t) => t.id !== id);
  writeTodos(updated);
  res.json({ message: "successfully deleted" });
};
