
// Select the elements for displaying the timer and control buttons
let timerDisplay = document.querySelector('.timerDisplay');
let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

// Initialize variables for milliseconds, seconds, and minutes
let msec = 00;
let secs = 00;
let mins = 00;

// Variable to store the timer interval ID
let timerId = null;

// Event listener for the Start button
startBtn.addEventListener('click', function(){
    // If timer is already running, stop it before starting a new one
    if(timerId !== null){
        clearInterval(timerId);
    }
    // Start the timer, calling startTimer function every 10 milliseconds
    timerId = setInterval(startTimer, 10);
});

// Event listener for the Stop button
stopBtn.addEventListener('click', function(){
    // Stop the timer by clearing the interval
    clearInterval(timerId);
});

// Event listener for the Reset button
resetBtn.addEventListener('click', function(){
    // Stop the timer and reset the display and variables to zero
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;
});

// Function to start and manage the timer
function startTimer(){
    // Increment milliseconds
    msec++;
    // If milliseconds reach 100, reset to 0 and increment seconds
    if(msec == 100){
        msec = 0;
        secs++;
        // If seconds reach 60, reset to 0 and increment minutes
        if(secs == 60){
            secs = 0;
            mins++;
        }
    }

    // Format each time unit to be two digits (e.g., '09' instead of '9')
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;
    
    // Update the timer display with the formatted time
    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;
}
  
