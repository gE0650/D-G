//从其他html文件中抓取
export async function load(sectionID, filepath) {
  const html = await fetch(filepath).then((r) => r.text());
  document.querySelector(`#${sectionID}`).innerHTML = html;
}

export function addelement(parentID, tag) {
  const parent = document.getElementById(parentID);
  const el = document.createElement(tag);
  parent.appendChild(el);
}
