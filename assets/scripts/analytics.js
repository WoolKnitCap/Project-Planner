const intervalId = setInterval(() => {
  console.log('Sending analytics data...');
}, 5000);

document.getElementById('stop-analytics-btn').addEventListener('click', () => {
  clearInterval(intervalId);
});
