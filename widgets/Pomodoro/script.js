let isBreakTime = false;
let isRunning = false;
let timerInterval;

const minutesDisplay = document.getElementById("minutes");
const secondsDisplay = document.getElementById("seconds");
const startStopButton = document.getElementById("start-stop");
const resetButton = document.getElementById("reset");
const workTimeInput = document.getElementById("work-time");
const breakTimeInput = document.getElementById("break-time");

startStopButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);

function toggleTimer() {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
}

function startTimer() {
    isRunning = true;
    startStopButton.textContent = "Pause";

    let timeLeft = (isBreakTime ? parseInt(breakTimeInput.value) : parseInt(workTimeInput.value)) * 60;

    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        minutesDisplay.textContent = String(minutes).padStart(2, "0");
        secondsDisplay.textContent = String(seconds).padStart(2, "0");

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            isBreakTime = !isBreakTime;
            resetTimer();
            if (isRunning) startTimer();
        } else {
            timeLeft--;
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    startStopButton.textContent = "Start";
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    isBreakTime = false;
    minutesDisplay.textContent = String(workTimeInput.value).padStart(2, "0");
    secondsDisplay.textContent = "00";
    startStopButton.textContent = "Start";
}

// Preset function to set work and break times
function setPreset(workMinutes, breakMinutes) {
    workTimeInput.value = workMinutes;
    breakTimeInput.value = breakMinutes;
    resetTimer();  // Reset to show the new preset time immediately
}
