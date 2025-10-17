let ans;
let pow = [1, 1];
let w = 0;
let mode = 0;
let n = [0, 0];
const ansR = document.getElementById("output1");
document.getElementById("nums").addEventListener("click", (e) => {
  const num = Number(e.target.dataset.num);
  if (num === undefined) return;
  n[w] = n[w] * 10 + num;
  pow[w] = pow[w] * 10;
  ansR.textContent = n[w];
});
document.getElementById("operators").addEventListener("click", (e) => {
  const num = Number(e.target.dataset.num);
  if (num !== 5 && num !== 6) {
    mode = num;
    w = 1;
  } else if (num === 5) {
    switch (mode) {
      case 1:
        ans = n[0] + n[1];
        break;
      case 2:
        ans = n[0] - n[1];
        break;
      case 3:
        ans = n[0] * n[1];
        break;
      case 4:
        ans = n[0] / n[1];
        break;
    }
    ansR.textContent = Number(ans.toFixed(6));
  } else {
    pow = [1, 1];
    w = 0;
    mode = 0;
    ans = 0;
    n = [0, 0];
    ansR.textContent = n[w];
  }
});
