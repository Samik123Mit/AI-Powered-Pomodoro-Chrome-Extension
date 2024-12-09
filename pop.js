let workTime = 25 * 60; // 25 minutes
let breakTime = 5 * 60; // 5 minutes
let timer;
let isWorking = true; // Work session or break
let currentTask = "";

// Task Handling
document.getElementById("add-task").addEventListener("click", () => {
    currentTask = document.getElementById("task-input").value;
    alert("Task added: " + currentTask);
});

// Timer Functions
document.getElementById("start-timer").addEventListener("click", () => {
    if (!timer) {
        startTimer();
    }
});

document.getElementById("reset-timer").addEventListener("click", () => {
    resetTimer();
});

function startTimer() {
    timer = setInterval(() => {
        let timeLeft = isWorking ? workTime : breakTime;
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("timer").innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

        if (isWorking) {
            workTime--;
            if (workTime <= 0) {
                clearInterval(timer);
                isWorking = false;
                alert("Work session over! Time for a break.");
                startBreak();
            }
        } else {
            breakTime--;
            if (breakTime <= 0) {
                clearInterval(timer);
                isWorking = true;
                alert("Break over! Back to work.");
                resetTimer();
            }
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    workTime = 25 * 60;
    breakTime = 5 * 60;
    document.getElementById("timer").innerText = "25:00";
}

function startBreak() {
    let breakType = document.getElementById("break-type").value;
    switch (breakType) {
        case "quote":
            showMotivationalQuote();
            break;
        case "youtube":
            playYouTubeVideo();
            break;
        case "song":
            playFavoriteSong();
            break;
    }
}

// Motivational Quote
function showMotivationalQuote() {
    fetch('https://zenquotes.io/api/random')
        .then(response => response.json())
        .then(data => {
            alert("Motivational Quote: " + data[0].q);
        });
}

// YouTube Video
function playYouTubeVideo() {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ"); // Replace with user-selected video
}

// Song
function playFavoriteSong() {
    window.open("https://www.youtube.com/watch?v=2Vv-BfVoq4g"); // Replace with user-selected song
}

// Reminders
document.getElementById("water-reminder").addEventListener("change", (event) => {
    if (event.target.checked) {
        setInterval(() => alert("Time to drink water!"), 60 * 60 * 1000); // Every 60 minutes
    }
});

//AI Time Allocation Heuristic
document.getElementById("add-task").addEventListener("click", () => {
    let task = document.getElementById("task-input").value;
    let complexity = prompt("Is this task simple, medium, or complex? (simple/medium/complex)");

    let suggestedTime;
    switch (complexity.toLowerCase()) {
        case "simple":
            suggestedTime = 25; // 25 minutes
            break;
        case "medium":
            suggestedTime = 50; // 50 minutes
            break;
        case "complex":
            suggestedTime = 75; // 75 minutes
            break;
        default:
            alert("Invalid input! Please enter simple, medium, or complex.");
            return;
    }

    alert(`Task added: ${task}. Suggested time: ${suggestedTime} minutes.`);
    // Save task and time to Chrome storage
    saveTask(task, suggestedTime);
});

function saveTask(task, time) {
    chrome.storage.sync.set({
        [task]: time }, () => {
        console.log(`Saved task ${task} with ${time} minutes.`);
    });
}

function authenticateUser() {
    chrome.identity.getAuthToken({ interactive: true }, function(token) {
        fetch('https://gmail.googleapis.com/gmail/v1/users/me/messages?labelIds=UNREAD', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                const unreadEmails = data.messages || [];
                if (unreadEmails.length > 0) {
                    alert(`You have ${unreadEmails.length} unread emails! Time to reply.`);
                } else {
                    alert("No unread emails.");
                }
            })
            .catch(error => console.error("Error fetching emails:", error));
    });
}

// Set a daily reminder to check unread emails
document.getElementById("email-reminder").addEventListener("change", (event) => {
    if (event.target.checked) {
        chrome.alarms.create("emailReminder", { periodInMinutes: 1440 }); // Set alarm for 24 hours
    } else {
        chrome.alarms.clear("emailReminder");
    }
});


chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "emailReminder") {
        authenticateUser();
    }
});

//Save and Check Birthdays
document.getElementById("add-birthday").addEventListener("click", () => {
    let name = document.getElementById("birthday-name").value;
    let date = document.getElementById("birthday-date").value;

    if (name && date) {
        chrome.storage.sync.get({ birthdays: [] }, (data) => {
            let birthdays = data.birthdays;
            birthdays.push({ name: name, date: date });
            chrome.storage.sync.set({ birthdays: birthdays }, () => {
                alert(`${name}'s birthday added!`);
                displayBirthdays();
            });
        });
    }
});

function displayBirthdays() {
    chrome.storage.sync.get({ birthdays: [] }, (data) => {
        let birthdayList = document.getElementById("birthday-list");
        birthdayList.innerHTML = '';
        data.birthdays.forEach(birthday => {
            let li = document.createElement("li");
            li.textContent = `${birthday.name}: ${birthday.date}`;
            birthdayList.appendChild(li);
        });
    });
}

function checkBirthdays() {
    chrome.storage.sync.get({ birthdays: [] }, (data) => {
        let today = new Date().toISOString().split("T")[0]; // Current date in YYYY-MM-DD
        data.birthdays.forEach(birthday => {
            if (birthday.date === today) {
                chrome.notifications.create({
                    type: 'basic',
                    iconUrl: 'icons/icon48.png',
                    title: 'Birthday Reminder',
                    message: `It's ${birthday.name}'s birthday today!`,
                    priority: 2
                });
            }
        });
    });
}

// Run daily check for birthdays
chrome.alarms.create("birthdayCheck", { periodInMinutes: 1440 }); // Check every 24 hours
chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "birthdayCheck") {
        checkBirthdays();
    }
});

//Notifications for Break Reminders

// Hydration Reminder
document.getElementById("water-reminder").addEventListener("change", (event) => {
    if (event.target.checked) {
        chrome.alarms.create("waterReminder", { periodInMinutes: 60 });
    } else {
        chrome.alarms.clear("waterReminder");
    }
});

// Eye-Blinking Reminder
document.getElementById("blink-reminder").addEventListener("change", (event) => {
    if (event.target.checked) {
        chrome.alarms.create("blinkReminder", { periodInMinutes: 30 });
    } else {
        chrome.alarms.clear("blinkReminder");
    }
});

chrome.alarms.onAlarm.addListener((alarm) => {
    if (alarm.name === "waterReminder") {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/icon48.png',
            title: 'Hydration Reminder',
            message: 'Drink some water to stay hydrated!',
            priority: 2
        });
    } else if (alarm.name === "blinkReminder") {
        chrome.notifications.create({
            type: 'basic',
            iconUrl: 'icons/icon48.png',
            title: 'Eye Blinking Reminder',
            message: 'Remember to blink and rest your eyes!',
            priority: 2
        });
    }
});