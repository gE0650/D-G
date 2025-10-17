const template = document.getElementById("taskbartemplate");
const Container = document.getElementById("tasksblock");
const input = document.getElementById("input");

document.getElementById("buttonadd").addEventListener("click", () => {
  const clone = template.content.cloneNode(true);

  const text = input.value.trim();
  const taskbar = clone.querySelector(".taskbar");
  if (!text) {
    alert("任务栏一定要有任务!");
    throw new Error("任务栏一定要有任务");
  }
  taskbar.querySelector(".tasktext").textContent = text;
  Container.appendChild(taskbar);
  input.value = "";
  const checkbox = taskbar.querySelector(".taskcheck");
  checkbox.addEventListener("change", () => {
    taskbar.remove();
  });
});
