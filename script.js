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
  
    const randomX = Math.floor(Math.random() * maxX) - halfWidth;
    const randomY = Math.floor(Math.random() * maxY) - halfHeight;
  
    element.style.position = "absolute";
    element.style.left = `${randomX}px`;
    element.style.top = `${randomY}px`;
}


// Function to play audio
  function playAudio() {
    var audio = document.getElementById('splash-page-audio');
    // Play audio if it's not already playing
    if (audio.paused) {
      audio.play();
    }
    // Remove the event listener after the audio starts playing
    document.removeEventListener('click', playAudio);
  }
  
  // Add click event listener to the whole document
  document.addEventListener('click', playAudio);

  
