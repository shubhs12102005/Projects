// Get references to the HTML elements for displaying the countdown
const days = document.getElementById('days'); // Element to display days
const hours = document.getElementById('hours'); // Element to display hours
const mins = document.getElementById('mins'); // Element to display minutes
const secs = document.getElementById('secs'); // Element to display seconds

// Helper function to format time values (e.g., add a leading zero for single digits)
const formatTime = (time) => {
    return time < 10 ? `0${time}` : time; // If time < 10, prepend a '0', else return the time as is
}

// Function to calculate and update the remaining time
const updateTime = (targetDate) => {
    const currDate = new Date(); // Get the current date and time
    const timeDifference = targetDate - currDate; // Calculate the difference between the target and current time

    // Calculate remaining seconds, minutes, hours, and days
    let calsecs = Math.floor(timeDifference / 1000) % 60; // Remaining seconds
    let calmins = Math.floor(timeDifference / 1000 / 60) % 60; // Remaining minutes
    let calhours = Math.floor(timeDifference / 1000 / 60 / 60) % 24; // Remaining hours
    let caldays = Math.floor(timeDifference / 1000 / 60 / 60 / 24); // Remaining days

    console.log(days, hours, mins, secs); // Debugging: Ensure the elements are properly retrieved

    // Update the text content of the respective elements
    days.textContent = formatTime(caldays); // Update days element
    hours.textContent = formatTime(calhours); // Update hours element
    mins.textContent = formatTime(calmins); // Update minutes element
    secs.textContent = formatTime(calsecs); // Update seconds element
}

// Function to start the countdown
const countDown = (targetDate) => {
    setInterval(() => updateTime(targetDate), 1000); // Call `updateTime` every 1 second
}

// Set the target date and start the countdown
const targetDate = new Date("December 31 2024 12:00"); // Set the target date for the countdown
countDown(targetDate); // Begin the countdown
