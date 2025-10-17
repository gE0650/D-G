import { load } from "./functions.js";

Promise.all([
  load("header", "htmls/header.html"),
  load("sidebar", "htmls/sidebar.html"),
  load("footer", "htmls/footer.html"),
]).then(() => console.log("all bars loaded"));
