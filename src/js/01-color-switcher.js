function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector("[data-start]");
const bodyChangeColor = document.querySelector("body");
const stopBtn = document.querySelector("[data-stop]");
let timerInterval = null;
stopBtn.disabled = true;

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerInterval = setInterval(() => {
    startBtn.style.color = getRandomHexColor();
    stopBtn.style.color = getRandomHexColor();
    bodyChangeColor.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  startBtn.disabled = false;
  stopBtn.disabled = true;
  clearInterval(timerInterval);
});

