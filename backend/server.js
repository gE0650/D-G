const express = require("express");
const cors = require("cors");
const app = express();
const todosRouter = require("./routers/todos");

app.use(express.json());
app.use(cors());
app.use("/todos/", todosRouter);

app.listen(3000, () => {
  console.log("local server running at 3000");
});
