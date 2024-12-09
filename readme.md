# Pomodoro Productivity Chrome Extension

A **Pomodoro-based** Chrome extension designed to help you manage study and work sessions effectively. It incorporates AI-powered time allocation, regular reminders for hydration and eye care, motivation via quotes and videos, and email/birthday notifications, making it an all-in-one productivity assistant.

## Features
- **AI-based Task Time Allocation**: Automatically suggests task duration based on task complexity.
- **Pomodoro Timer**: Divide your study or work into Pomodoro sessions (25 minutes work, 5 minutes break).
- **Break Reminders**: Notify users to take regular breaks, drink water, and blink their eyes to maintain focus and health.
- **Motivational Boost**: Play motivational quotes, YouTube videos, or your favorite song during breaks.
- **Email Reminders**: Check your Gmail for unread emails and remind you to reply.
- **Birthday Reminders**: Set and get reminders for important birthdays.
- **Task Management**: Add, remove, and track your tasks directly from the popup interface.
  
## Screenshots
![Popup Example](images/screenshot.png)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/pomodoro-productivity-extension.git
   cd pomodoro-productivity-extension
   Load the Extension in Chrome:

Open Chrome and navigate to chrome://extensions/.
Enable Developer Mode (toggle in the top-right corner).
Click on Load Unpacked and select the folder where the project is located.
Set up Gmail API (for Email Reminders):

Go to the Google Cloud Console.
Enable the Gmail API for your project.
Create OAuth credentials for the Chrome extension.
Add your Client ID in manifest.json under the oauth2 section.
Customize Icons: You can replace the icons in the /icons directory with your own if you wish.

How to Use
Add Tasks:

Click on the extension icon to open the popup.
Add a new task and specify its complexity (simple, medium, or complex) for AI-based time suggestion.
The extension will automatically allocate Pomodoro sessions based on the task's complexity.
Start a Pomodoro Session:

Use the Start Pomodoro button to begin your timed work session.
After 25 minutes, you’ll get a notification for a 5-minute break.
Hydration & Eye Blinking Reminders:

Enable reminders for drinking water and eye-blinking by toggling the options in the popup.
You will receive notifications based on the intervals you've set.
Motivational Breaks:

During breaks, the extension will either show a motivational quote or play a YouTube video/song (customizable).
Email Reminders:

Enable the email reminders to check for unread emails every day and get notified to reply.
Birthday Reminders:

Add birthdays and the extension will notify you on the day of the event.
Contributing
We welcome contributions from the community to improve this extension! Here's how you can contribute:

Fork the repository.
Create a branch for your feature or bugfix (git checkout -b feature/new-feature).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/new-feature).
Submit a pull request!
License
This project is licensed under the MIT License - see the LICENSE file for details.

Future Enhancements
Task Syncing: Sync tasks across devices using Chrome storage or an external database.
Advanced AI: Use machine learning to better predict task times based on previous work history.
Customizable Pomodoro Sessions: Allow users to change Pomodoro durations.

BUILT WITH LOVE(EMOJI) BY SAMIKSHA MITRA
### Key Sections Breakdown:
1. **Project Title** and brief introduction about the extension.
2. **Features** section lists all key functionalities.
3. **Installation** guide provides detailed steps to install the extension locally, including API setup for Gmail.
4. **How to Use** explains how to interact with the extension.
5. **Contributing** section encourages other developers to contribute.
6. **License** section with MIT license as a placeholder (modify if using a different one).
7. **Future Enhancements** provides a roadmap for further improvements.

You can customize it further depending on additional features or dependencies. Let me know if you'd like to modify it in any specific way!

