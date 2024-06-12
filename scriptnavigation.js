document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    // Target the random page links by their IDs
    const randomPageLinkLeft = document.getElementById("random-page-link-left");
    const randomPageLinkRight = document.getElementById("random-page-link-right");

    if (!randomPageLinkLeft) {
        console.error("Left navigation link not found!");
    } else {
        console.log("Left navigation link found");
        randomPageLinkLeft.addEventListener("click", navigateToRandomPage);
    }

    if (!randomPageLinkRight) {
        console.error("Right navigation link not found!");
    } else {
        console.log("Right navigation link found");
        randomPageLinkRight.addEventListener("click", navigateToRandomPage);
    }

    // List of random page URLs
    const randomPages = [
        "index.html",
        "shea.html",
    ];

    function navigateToRandomPage(event) {
        event.preventDefault();
        const randomIndex = Math.floor(Math.random() * randomPages.length);
        const randomPage = randomPages[randomIndex];
        console.log(`Navigating to: ${randomPage}`);
        window.location.href = randomPage;
    }
});
