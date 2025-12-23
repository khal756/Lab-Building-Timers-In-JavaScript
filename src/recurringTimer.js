function recurringTimer(message, interval) {
  // Set up a recurring timer
  const timerId = setInterval(() => {
    console.log(message); // Log the message each interval
  }, interval);

  return timerId; // Return the timer ID for stopping or testing
}

function stopRecurringTimer(timerId) {
  // Stop the recurring timer using clearInterval
  clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };
