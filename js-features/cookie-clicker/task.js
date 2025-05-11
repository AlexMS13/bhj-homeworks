let clickerCounter = document.getElementById("clicker__counter");
let cookie = document.getElementById("cookie");

cookie.onclick = () => {
  let clickCounter = parseInt(clickerCounter.textContent) + 1;
  clickerCounter.textContent = clickCounter;
  cookie.width = clickCounter % 2 ? 300 : 200;
};