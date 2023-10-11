"use strict";
function showHide() {
    const hamburgerMenu = document.getElementById("menuButton");
    const dropDown = document.getElementById("dropdown");
    if (!hamburgerMenu || !dropDown)
        return;
    hamburgerMenu.addEventListener("click", () => {
        console.log("Hello");
        dropDown.classList.toggle("dropdown-open");
    });
}
showHide();
