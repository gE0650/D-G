const template = document.getElementById("commenttemp");
const Container = document.getElementById("history");
const input = document.getElementById("markdown-input");
const inputname = document.getElementById("name");
const preview = document.getElementById("markdown-preview");

input.addEventListener("input", () => {
  // 将 Markdown 转 HTML
  const html = marked.parse(input.value);
  // 安全插入
  preview.innerHTML = DOMPurify.sanitize(html);
});

const API_URL = "http://localhost:3000/comments";
try {
  const res = await fetch(API_URL, { method: "GET" });
  const comments = await res.json();
  comments.forEach((comment) => addCommentToDOM(comment));
} catch (err) {
  console.error("数据加载错误", err);
}

function addCommentToDOM(comment) {
  const clone = template.content.cloneNode(true);
  const all = clone.querySelector(".historycontainer");
  const commentblock = clone.querySelector(".comment");
  const commentname = clone.querySelector(".commentname");
  const html = marked.parse(comment.text);
  console.log(html);
  commentblock.innerHTML = DOMPurify.sanitize(html);
  commentname.textContent = comment.name;
  Container.appendChild(all);
}

document.getElementById("publish").addEventListener("click", async () => {
  const text = input.value.trim();
  const nametext = inputname.value.trim();
  if (!text) {
    alert("请输入文本");
    return;
  }
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        text: text,
        name: nametext,
      }),
    });
    const comment = await res.json();
    console.log(comment);
    addCommentToDOM(comment);
    input.value = "";
    preview.innerHTML = "";
    inputname.value = "";
  } catch (err) {
    console.log("增加评论出错喵", err);
  }
});
