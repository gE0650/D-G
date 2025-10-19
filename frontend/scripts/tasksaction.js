const template = document.getElementById("taskbartemplate");
const Container = document.getElementById("tasksblock");
const input = document.getElementById("input");
const API_URL = "http://localhost:3000/todos";
try {
  const res = await fetch(API_URL, { method: "GET" });
  const todos = await res.json();
  todos.forEach((todo) => addTaskToDOM(todo));
} catch (err) {
  console.error("数据加载错误", err);
}

function addTaskToDOM(todo) {
  const clone = template.content.cloneNode(true);
  const taskbar = clone.querySelector(".taskbar");
  taskbar.querySelector(".tasktext").textContent = todo.text;
  Container.appendChild(taskbar);
  const checkbox = taskbar.querySelector(".taskcheck");
  checkbox.checked = false;
  checkbox.addEventListener("click", async () => {
    try {
      await fetch(`${API_URL}/${todo.id}`, {
        method: "DELETE",
      });
      taskbar.remove();
    } catch (err) {
      console.error("删除任务失败", err);
    }
  });
}

document.getElementById("buttonadd").addEventListener("click", async () => {
  const text = input.value.trim();
  if (!text) {
    alert("任务栏一定要有任务!");
    return;
  }
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const todo = await res.json();
    addTaskToDOM(todo);
    input.value = "";
  } catch (err) {
    console.log("增加任务出错喵", err);
  }
});
