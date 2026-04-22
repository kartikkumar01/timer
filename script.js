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

const fullscreenBtn = document.getElementById("fullscreenBtn");

function updateFullscreenBtn() {
  if (document.fullscreenElement) {
    // Remove any text so that only the icon shows, reflecting button design
    fullscreenBtn.setAttribute("aria-label", "Exit fullscreen");
    // Optionally add styles (like a different bg?) or swap icon if you want
  } else {
    fullscreenBtn.setAttribute("aria-label", "Enter fullscreen");
  }
}

fullscreenBtn.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

document.addEventListener("fullscreenchange", updateFullscreenBtn);

// Initialize button state on page load (optional, for accurate ARIA state)
updateFullscreenBtn();


//add reset button functionality
resetBtn.addEventListener("click", () => {
  seconds = 0;
  updateDisplay();
});

  // 1) Make the default dark mode
  document.documentElement.classList.add("dark");

  // 2) Make the default full screen
  document.addEventListener("click", () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    }
  }, { once: true });