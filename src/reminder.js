function delayedReminder(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message); // Log the reminder message
      resolve(); // Resolve the promise after logging
    }, delay);
  });
}

module.exports = { delayedReminder };
