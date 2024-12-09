# Pomodoro Productivity Chrome Extension

A **Pomodoro-based** Chrome extension designed to help you manage study and work sessions effectively. It incorporates AI-powered time allocation, regular reminders for hydration and eye care, motivation via quotes and videos, and email/birthday notifications, making it an all-in-one productivity assistant.

---

## Features

- **AI-based Task Time Allocation**: Automatically suggests task duration based on task complexity.
- **Pomodoro Timer**: Divide your study or work into Pomodoro sessions (25 minutes work, 5 minutes break).
- **Break Reminders**: Notify users to take regular breaks, drink water, and blink their eyes to maintain focus and health.
- **Motivational Boost**: Play motivational quotes, YouTube videos, or your favorite song during breaks.
- **Email Reminders**: Check your Gmail for unread emails and remind you to reply.
- **Birthday Reminders**: Set and get reminders for important birthdays.
- **Task Management**: Add, remove, and track your tasks directly from the popup interface.

---



---

## Installation

### Clone the Repository

```bash
git clone https://github.com/yourusername/pomodoro-productivity-extension.git
cd pomodoro-productivity-extension
```

### Load the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable Developer Mode (toggle in the top-right corner).
3. Click on **Load Unpacked** and select the folder where the project is located.

### Set up Gmail API (for Email Reminders)

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Enable the Gmail API for your project.
3. Create OAuth credentials for the Chrome extension.
4. Add your Client ID in `manifest.json` under the `oauth2` section.

### Customize Icons

You can replace the icons in the `/icons` directory with your own if you wish.

---

## How to Use

### Add Tasks

1. Click on the extension icon to open the popup.
2. Add a new task and specify its complexity (simple, medium, or complex) for AI-based time suggestion.
3. The extension will automatically allocate Pomodoro sessions based on the task's complexity.

### Start a Pomodoro Session

1. Use the **Start Pomodoro** button to begin your timed work session.
2. After 25 minutes, you’ll get a notification for a 5-minute break.

### Hydration & Eye Blinking Reminders

1. Enable reminders for drinking water and eye-blinking by toggling the options in the popup.
2. You will receive notifications based on the intervals you've set.

### Motivational Breaks

During breaks, the extension will either show a motivational quote or play a YouTube video/song (customizable).

### Email Reminders

Enable the email reminders to check for unread emails every day and get notified to reply.

### Birthday Reminders

Add birthdays and the extension will notify you on the day of the event.

---

## Contributing

We welcome contributions from the community to improve this extension! Here's how you can contribute:

1. Fork the repository.
2. Create a branch for your feature or bugfix:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/new-feature
   ```
5. Submit a pull request!

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Future Enhancements

- **Task Syncing**: Sync tasks across devices using Chrome storage or an external database.
- **Advanced AI**: Use machine learning to better predict task times based on previous work history.
- **Customizable Pomodoro Sessions**: Allow users to change Pomodoro durations.

---

**BUILT WITH ❤️ BY SAMIKSHA MITRA**

