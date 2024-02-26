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
