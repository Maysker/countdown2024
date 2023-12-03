// Get the current date and year
var current_date = new Date();
var current_year = current_date.getFullYear();

// Set the target date to January 1st of the next year
var next_year = current_year + 1;
var target_date = new Date(next_year, 0, 1).getTime(); // January is 0 in JavaScript

// Declare variables for time units
var days, hours, minutes, seconds;

// Get the countdown element from the document
var countdown = document.getElementById("tiles");

// Initialize the countdown
getCountdown();

// Update the countdown every second
setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){
  // Get the current time and calculate the difference in seconds
  var current_date = new Date().getTime();
  var seconds_left = (target_date - current_date) / 1000;

  // Calculate days, hours, minutes, and seconds
  days = pad(parseInt(seconds_left / 86400));
  seconds_left = seconds_left % 86400;
     
  hours = pad(parseInt(seconds_left / 3600));
  seconds_left = seconds_left % 3600;
      
  minutes = pad(parseInt(seconds_left / 60));
  seconds = pad(parseInt(seconds_left % 60));

  // Display the countdown
  countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 
}

// Helper function to add a leading zero to numbers less than 10
function pad(n) {
  return (n < 10 ? '0' : '') + n;
}

function createSnowflake() {
  const snowflake = document.createElement('div');
  snowflake.classList.add('snowflake');
  snowflake.textContent = '❅';
  
 // Random position of snowflake horizontally and random opacity
snowflake.style.left = `${Math.random() * 100}%`;
snowflake.style.opacity = `${0.4 + Math.random() * 0.6}`;

// Adding the snowflake to the container
document.body.appendChild(snowflake);

// Setting random falling duration and animation delay
const duration = `${5 + Math.random() * 10}s`;
const delay = `${Math.random() * 5}s`;
snowflake.style.animationDuration = duration;
snowflake.style.animationDelay = delay;

// Removing the snowflake after it falls
setTimeout(() => {
  snowflake.remove();
}, parseFloat(duration) * 1000 + parseFloat(delay) * 1000); // Convert to milliseconds
}

// Function to start creating snowflakes every 50 milliseconds
function startSnowing() {
  setInterval(createSnowflake, 50);
}

// Start snowfall when the page is loaded
document.addEventListener('DOMContentLoaded', startSnowing);

// Array of strings to be "typed"
const codePhrases = [
    
    "SELECT * FROM World WHERE Person = 'Full-Stack Developer' AND Mood = 'Celebratory';",
    "console.log('May your code be as asynchronous and efficient as a Promise in JS!');",
    "UPDATE `Developers` SET `Success` = '100%' WHERE `Name` = 'Full-Stack Developer';",
    "downloading files...",
    "operation complete."
];

// Element where the code will be displayed
const codeElement = document.getElementById('code');

// Function to simulate typing text
function typePhrases(phrases, index = 0) {
  let phraseIndex = index;
  let charIndex = 0;
  let intervalId;
  const typingSound = document.getElementById('typing-sound'); // Get the audio element

  function typeNextChar() {
    if (charIndex < phrases[phraseIndex].length) {
      if (charIndex === 0) {
        typingSound.play(); // Start playing the sound
      }
      codeElement.textContent += phrases[phraseIndex].charAt(charIndex);
      charIndex++;
    } else {
      typingSound.pause(); // Stop playing the sound
      typingSound.currentTime = 0; // Reset the sound time to the beginning
      clearInterval(intervalId);
      setTimeout(() => {
        codeElement.textContent = '';
        charIndex = 0;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        intervalId = setInterval(typeNextChar, 100); // Typing speed
      }, 2000); // Pause before starting the next phrase
    }
  }

  intervalId = setInterval(typeNextChar, 100); // Typing speed
}

document.addEventListener('DOMContentLoaded', () => typePhrases(codePhrases));

// Get audio elements and the mute button
var backgroundMusic = document.getElementById('background-music');
var typingSound = document.getElementById('typing-sound');
var muteButton = document.getElementById('mute-button');

// Flag to track the sound state
var isMuted = false;

// Function to toggle mute
function toggleMute() {
  isMuted = !isMuted; // Toggle the flag
  backgroundMusic.muted = isMuted; // Enable or disable background music
  typingSound.muted = isMuted; // Enable or disable typing sound
  muteButton.textContent = isMuted ? "Unmute" : "Mute"; // Update the button text
}

// Add an event listener for the mute button
muteButton.addEventListener('click', toggleMute);
