# browser-tab-auto-reload

# Browser Tab Auto Reloader

This is a UserScript. I was in search of a Chrome plugin capable of automatically reloading a specific domain's browser tab at given intervals, like every 5 minutes. Additionally, I wanted it to pause the timer while I was actively working or typing on that tab. Most of the extensions I tried were riddled with adware and redirects, and some didn't even function properly. As a result, I decided to create a simple UserScript that would exactly fulfill my requirements from a browser extension. I've customized this script and incorporated some advanced features such as:

- Pausing the reload timer during keyboard/mouse click activities.
- Running this UserScript at a specific interval (useful if you're only using it during your working hours, for example).
- Displaying a countdown timer in the tab title, which is incredibly handy when multiple tabs are open simultaneously.
- Refreshing the tab when the countdown reaches zero, ensuring ongoing user engagement.

## Features

- Set a specific UTC time range during which the script will be active.
- Display a countdown in the tab title.
- Reset the countdown with user activity (click or keypress).
- Auto-reload the tab when the countdown reaches zero.

## Installation & Usage with Tampermonkey

1. **Install Tampermonkey**: If you haven't already, first install the Tampermonkey extension for your browser:
    - [Chrome](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
    - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
    - [Safari](https://apps.apple.com/us/app/tampermonkey/id1482490089)
    - [Microsoft Edge](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)
2. Click the Tampermonkey icon in your browser toolbar and select "Create a new script."
3. Remove any default code that appears.
4. Copy and paste the provided script into the Tampermonkey editor.
5. Save the script by clicking the disk icon or pressing `Ctrl + S`.

## Configuration

- **Modify the @match tag** (IMPORTANT)
- Set the desired UTC time range by modifying the `UTC_START_HOUR` and `UTC_END_HOUR` constants in the script.

## Usage

- Once installed and configured, visit the specified domain in your browser or reload the tab. If the current UTC time is within the range you set, the script will automatically activate and display the countdown in the tab title.
- Engaging with the page (clicking or pressing keys) will reset the countdown.
- When the countdown reaches zero, the tab will refresh.

## Customization

- **Time Range**: Modify the `UTC_START_HOUR` and `UTC_END_HOUR` constants to set your desired UTC time range.
- **Countdown Duration**: The default countdown time is 300 seconds (5 minutes). Change the `countdownTime` value to adjust the duration.
- **Delay after Activity**: The countdown resets to its original value after 5 minutes of user activity. Modify the multiplier in the `setTimeout` function to change this delay duration.

## Author

Sam - [sam@webdev.asia](mailto:sam@webdev.asia)

## License

This project is open source. Feel free to use, modify, and distribute as you see fit.
