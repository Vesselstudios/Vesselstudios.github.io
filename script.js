document.addEventListener("DOMContentLoaded", function () {
    const diagramImg = document.getElementById("diagram-img");

    // Function to update position periodically for the flicker effect
    setInterval(function () {
        // Hide the image
        diagramImg.style.display = "none";
        
        // Pause for 5 seconds
        setTimeout(function() {
            // Show the image after the pause
            diagramImg.style.display = "block";
            
            // Set random position
            setRandomPosition(diagramImg);
        }, 5000);
    }, 7000); // Adjust the interval as needed for the flicker speed
});

function setRandomPosition(element) {
    const halfWidth = element.offsetWidth / 2;
    const halfHeight = element.offsetHeight / 2;
    
    const maxX = window.innerWidth - halfWidth;
    const maxY = window.innerHeight - halfHeight;
    
    let randomX, randomY;
    const MIN_DISTANCE = 600; // Minimum distance between positions

    do {
        randomX = Math.floor(Math.random() * maxX) - halfWidth;
        randomY = Math.floor(Math.random() * maxY) - halfHeight;
    } while (distance(element.offsetLeft, element.offsetTop, randomX, randomY) < MIN_DISTANCE);


  
    element.style.position = "absolute";
    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
}

function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}


  
// Define the function to play or pause audio on click
function toggleAudio() {
    var audio = document.getElementById('splash-page-audio');
    // Check if audio is paused
    if (audio.paused) {
        audio.play(); // If paused, play audio
    } else {
        audio.pause(); // If playing, pause audio
        audio.currentTime = 0; // Reset audio playback to start
    }
}

// Add click event listener to the whole document
var clickCount = 0; // Variable to track click count
document.addEventListener('click', function() {
    clickCount++; // Increment click count on each click
    if (clickCount == 2) { // If click count is 2
        toggleAudio(); // Call toggleAudio function
        clickCount = 0; // Reset click count
    }
});
