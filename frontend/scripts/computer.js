import { load } from "./functions.js";

Promise.all([load("computer", "htmls/computer.html")]).then(() => {
  console.log("all bars loaded");
  import("./computeraction.js");
});
