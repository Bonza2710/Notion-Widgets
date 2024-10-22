// Set the date you're counting down to (e.g., January 1, 2025)
const countdownDate = new Date("Dec 13, 2024 18:00:00").getTime();

// Update the countdown every second
const countdownFunction = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the time difference between now and the countdown date
  const timeLeft = countdownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  const weeks = Math.floor(timeLeft / (1000 * 60 * 60 * 24 * 7))
  const days = Math.floor(timeLeft % (1000 * 60 * 60 * 24 * 7)/ (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Output the result in the respective elements
  document.getElementById("weeks").innerHTML = weeks
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is over, display a message
  if (timeLeft < 0) {
    clearInterval(countdownFunction);
    document.getElementById("timer").innerHTML = "Term Finished!";
  }
}, 1000);
