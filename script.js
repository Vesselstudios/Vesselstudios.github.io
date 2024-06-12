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
  const halfWidth = (element.offsetWidth * 0.5) / 2;
  const halfHeight = (element.offsetHeight * 0.5) / 2;

  // Adjusted to consider the entire screen width and height
  const maxX = window.innerWidth - (element.offsetWidth * 0.6); // Full width considered of scaled image
  const maxY = window.innerHeight - (element.offsetHeight * 0.6); // Full height considered of scaled image

  console.log(`window.innerHeight: ${window.innerHeight}, window.innerWidth: ${window.innerWidth}`);
  console.log(`element.offsetHeight: ${element.offsetHeight}, element.offsetWidth: ${element.offsetWidth}`);
  console.log(`maxX: ${maxX}, maxY: ${maxY}`);

  let randomX, randomY;
  const MIN_DISTANCE = 200; // Minimum distance between positions

      // Random page navigation
      const randomPageLinks = document.querySelectorAll(".centered-text a.non-link");

      // List of random page URLs
      const randomPages = [
          "404.html",
          "about.html",
          "shea.html",
      ];
  
      randomPageLinks.forEach(function(link) {
          link.addEventListener("click", function(event) {
              event.preventDefault();
              const randomPage = randomPages[Math.floor(Math.random() * randomPages.length)];
              window.location.href = randomPage;
          });
      });
  };

  do {
    // Generate random positions based on the full possible range
    randomX = Math.floor(Math.random() * (maxX + 201)) - 200;
    randomY = Math.floor(Math.random() * (maxY + 201)) - 200;

    console.log(`Trial - randomX: ${randomX}, randomY: ${randomY}`); // Log trial values
  } while (distance(element.offsetLeft, element.offsetTop, randomX, randomY) < MIN_DISTANCE);

  console.log(`Final - randomX: ${randomX}, randomY: ${randomY}`); // Log final values chosen

  element.style.position = "absolute";
  element.style.left = `${randomX}px`;
  element.style.top = `${randomY}px`;



function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Define the function to play or pause audio on click
function toggleAudio() {
    var audio = document.getElementById('splash-page-audio');
    var playIcon = document.getElementById('play-icon');
    
    // Check if audio is paused
    if (audio.paused) {
        audio.play(); // If paused, play audio
        playIcon.setAttribute('fill', '#000'); // Change fill color of triangle to black
    } else {
        audio.pause(); // If playing, pause audio
        audio.currentTime = 0; // Reset audio playback to start
        playIcon.setAttribute('fill', 'none'); // Change fill color of triangle back to transparent
    }
}

// Add click event listener to the whole document
var clickCount = 0; // Variable to track click count
document.addEventListener('click', function() {
    clickCount++; // Increment click count on each click
    if (clickCount == 1) { // If click count is 1
        toggleAudio(); // Call toggleAudio function
        clickCount = 0; // Reset click count
    }
});

// Set the position of the diagram image
const diagramImg = document.getElementById("diagram-img");
const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;
const diagramWidth = diagramImg.offsetWidth;
const diagramHeight = diagramImg.offsetHeight;

// Calculate position
const posX = viewportWidth - diagramWidth;
const posY = viewportHeight - diagramHeight;

// Set position
diagramImg.style.position = "absolute";
diagramImg.style.left = posX + "px";
diagramImg.style.top = posY + "px";
