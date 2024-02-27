document.addEventListener("DOMContentLoaded", function () {
    const diagramImg = document.getElementById("diagram-img");

    setRandomPosition(diagramImg);

    window.addEventListener("resize", function () {
        setRandomPosition(diagramImg);
    });
});

function setRandomPosition(element) {
    const maxX = window.innerWidth - element.clientWidth;
    const maxY = window.innerHeight - element.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    element.style.left = randomX + "px";
    element.style.top = randomY + "px";
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
