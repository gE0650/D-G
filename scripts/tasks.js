import { load } from "./functions.js";

Promise.all([load("tasks", "../htmls/tasks.html")]).then(() => {
  console.log("task block loaded");
  import("./tasksaction.js");
});
