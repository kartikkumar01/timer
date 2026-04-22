let seconds = 0;
let isRunning = false;
let interval;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const themeToggle = document.getElementById("themeToggle");

function updateDisplay() {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  mins = mins < 10 ? "0" + mins : mins;
  secs = secs < 10 ? "0" + secs : secs;

  timerDisplay.textContent = `${mins}:${secs}`;
}

startBtn.addEventListener("click", () => {
  if (!isRunning) {
    interval = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);

    startBtn.textContent = "Pause";
    isRunning = true;
  } else {
    clearInterval(interval);
    startBtn.textContent = "Start";
    isRunning = false;
  }
});

// Theme Toggle
themeToggle.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
});