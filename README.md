# browser-tab-auto-reload

**Browser Tab Auto Reloader**
This script provides a way to auto-reload your browser tab within a specified UTC time range. It displays a countdown in the tab title and can be reset with user interactions (like clicks or keypresses). When the countdown hits zero, the tab refreshes, ensuring active user engagement.

**Features**
Set a specific UTC time range during which the script will be active.
Display a countdown in the tab title.
Reset the countdown with user activity (click or keypress).
Auto-reload the tab when the countdown reaches zero.

**Installation & Usage with Tampermonkey**
1. Install Tampermonkey: If you haven't already, first install the Tampermonkey extension for your browser:

Chrome
Firefox
Safari
Microsoft Edge
Add the Script:

2. Click the Tampermonkey icon in your browser toolbar and select "Create a new script."
3. Remove any default code that appears.
4. Copy and paste the provided script into the Tampermonkey editor.
5.Save the script by clicking the disk icon or pressing Ctrl + S.

**Configuration:**
Modify the @match tag **IMPORTANT**
Set the desired UTC time range by modifying the UTC_START_HOUR and UTC_END_HOUR constants in the script.

**Usage:**
Once installed and configured, visit the specified domain in your browser or reload the tab. If the current UTC time is within the range you set, the script will automatically activate and display the countdown in the tab title.
Engaging with the page (clicking or pressing keys) will reset the countdown.
When the countdown reaches zero, the tab will refresh.

**Customization**
Time Range: Modify the UTC_START_HOUR and UTC_END_HOUR constants to set your desired UTC time range.

Countdown Duration: The default countdown time is 300 seconds (5 minutes). Change the countdownTime value to adjust the duration.

Delay after Activity: The countdown resets to its original value after 5 minutes of user activity. Modify the multiplier in the setTimeout function to change this delay duration.

**Author**
Sam - sam@webdev.asia

**License**
This project is open source. Feel free to use, modify, and distribute as you see fit.
