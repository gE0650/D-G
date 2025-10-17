const express = require("express");
const app = express();
const todosRouter = require("./routers/todos");

app.use(express.json());
app.use("/todos/", todosRouter);

app.listen(3000, () => {
  console.log("local server running at 3000");
});
