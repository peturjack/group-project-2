
function showHide() {
    const hamburgerMenu: HTMLElement | null = document.getElementById("menuButton");
    const dropDown: HTMLElement | null = document.getElementById("dropdown");

    if (!hamburgerMenu || !dropDown) return;

    hamburgerMenu.addEventListener("click", () => {
        console.log("Hello");
        dropDown.classList.toggle("dropdown-open");
    });
}

showHide();