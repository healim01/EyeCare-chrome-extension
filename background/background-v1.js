chrome.runtime.onInstalled.addListener(() => {
  // 20분(1200초)마다 알림을 설정하는 타이머
  chrome.alarms.create('eyeCareAlarm', {
    delayInMinutes: 20,
    periodInMinutes: 20,
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'eyeCareAlarm') {
    chrome.notifications.create({
      type: 'basic',
      iconUrl: chrome.runtime.getURL('icons/icon.png'),
      title: '휴식할 시간!',
      message: '눈을 위해 20초간 눈을 감거나 멀리 있는 풍경을 바라봐보세요!',
      priority: 1,
    });
  }
});
