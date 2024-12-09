chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "pomodoro") {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/icon48.png',
            title: 'Pomodoro Timer',
            message: 'Time for a break!',
            priority: 2
        });
    }
});