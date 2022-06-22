const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
let intervalId;

startBtn.addEventListener('click', () => {
  if (intervalId) {
    clearInterval(intervalId);
  }

  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
