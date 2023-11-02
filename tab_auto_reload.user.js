// ==UserScript==
// @name         Browser Tab Auto Reloader
// @namespace    https://webdev.asia/
// @version      1.0
// @description  Auto reload your browser tab and display countdown in the tab title between specified UTC hours and delayed user activity
// @author       sam@webdev.asia
// @match        https://yourdomain.com
// @grant        none
// ==/UserScript==

(function() {
    if (window !== window.top) return;

    // --- Time Configuration ---
    // Change the UTC_START_HOUR and UTC_END_HOUR values to specify the desired UTC hours range.
    // For example: to run the script from 4pm to 2am UTC, set UTC_START_HOUR to 16 and UTC_END_HOUR to 2.
    const UTC_START_HOUR = 16; // Change this to the desired UTC start hour.
    const UTC_END_HOUR = 2; // Change this to the desired UTC end hour.

    // Uncomment the next line if you don't want to use the time-based functionality.
    // return;
    const currentHourUTC = new Date().getUTCHours();
    if ((UTC_START_HOUR < UTC_END_HOUR && (currentHourUTC >= UTC_START_HOUR && currentHourUTC < UTC_END_HOUR))
    || (UTC_START_HOUR > UTC_END_HOUR && (currentHourUTC >= UTC_START_HOUR || currentHourUTC < UTC_END_HOUR))) {
        const originalTitle = document.title;
        let countdownTime = 300; // The initial countdown time in seconds. Change this value if a different duration is desired.
        let activityDetected = false;
        let countdownInterval;
        // This function starts the countdown timer in the tab title.
        const startCountdown = () => {
            countdownInterval = setInterval(() => {
                countdownTime--;
                if (countdownTime <= 0) location.reload(); // Reloads the page when countdown reaches zero
                else document.title = `${countdownTime}s - ${originalTitle}`;
            }, 1000);
        };
        // This function resets the countdown timer when user activity (click or keypress) is detected.
        const resetTimer = () => {
            if (activityDetected) return;
            activityDetected = true;
            if (countdownInterval) {
                clearInterval(countdownInterval);
            }
            setTimeout(() => {
                activityDetected = false;
                countdownTime = 300; // Reset the countdown time. Make sure this matches the initial countdownTime value.
                startCountdown();
            }, 5 * 60 * 1000); // 5 minutes delay. Change the multiplier for a different delay duration.
        };
        document.body.addEventListener('click', resetTimer);
        document.addEventListener('keydown', resetTimer);
        startCountdown();
    }
})();
