const template = document.getElementById("taskbartemplate");
const Container = document.getElementById("tasksblock");
const input = document.getElementById("input");
const API_URL = "http://localhost:3000/todos";

document.getElementById("buttonadd").addEventListener("click", async () => {
  const clone = template.content.cloneNode(true);

  const text = input.value.trim();
  const taskbar = clone.querySelector(".taskbar");
  if (!text) {
    alert("任务栏一定要有任务!");
    return;
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  const todo = await res.json();
  console.log("后端返回:", todo);
  taskbar.querySelector(".tasktext").textContent = todo.text;
  Container.appendChild(taskbar);
  input.value = "";
  const checkbox = taskbar.querySelector(".taskcheck");
  checkbox.checked = false;
  checkbox.addEventListener("click", async () => {
    await fetch(`${API_URL}/${todo.id}`, {
      method: "DELETE",
    });
    taskbar.remove();
  });
});
