function countdownTimer(startTime, interval) {
  let remainingTime = startTime;

  const timerId = setInterval(() => {
    console.log(remainingTime); // Log the remaining time
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(timerId); // Stop the timer when it reaches 0
    }
  }, interval);

  return timerId; // Return the timer ID for test validation
}

module.exports = { countdownTimer };
