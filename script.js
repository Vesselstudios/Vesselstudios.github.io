document.addEventListener("DOMContentLoaded", function () {
    const diagramImg = document.getElementById("diagram-img");
  
    // Function to update position periodically for the flicker effect
    setInterval(function () {
      setRandomPosition(diagramImg);
    }, 4000); // Adjust the interval as needed for the flicker speed
  });
  

    // Start the animation with a 4-second interval between position changes
    setInterval(setRandomPosition, 4000);

  function setRandomPosition(element) {
    const halfWidth = element.offsetWidth / 2;
    const halfHeight = element.offsetHeight / 2;
  
    // Adjust maxX and maxY to consider the center of the element
    // This allows the center point to stay on screen but lets edges go off-screen
    const maxX = window.innerWidth - halfWidth; // Adjust to keep the center within the viewport
    const maxY = window.innerHeight - halfHeight; // Adjust to keep the center within the viewport
  
    // Calculate random positions for the center of the element
    const randomX = Math.floor(Math.random() * maxX) - halfWidth;
    const randomY = Math.floor(Math.random() * maxY) - halfHeight;
  
    element.style.position = "absolute"; // Ensure the element is positioned absolutely
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

  
