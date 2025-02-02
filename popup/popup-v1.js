document.getElementById('reset').addEventListener('click', () => {
  const interval = document.getElementById('intervalSelect').value;

  chrome.alarms.clear('eyeCareAlarm', () => {
    chrome.alarms.create('eyeCareAlarm', {
      delayInMinutes: Number(interval),
      periodInMinutes: Number(interval),
    });
    window.close();
  });
});
