function showHide() {
    // Get a reference to the "menuButton" and "dropdown" elements in the HTML
    const hamburgerMenu: HTMLImageElement | null = document.getElementById("menuButton") as HTMLImageElement;
    const dropDown: HTMLElement | null = document.getElementById("dropdown");

    // Check if either of the elements is missing, and if so, exit the function
    if (!hamburgerMenu || !dropDown) return;

    // Add a click event listener to the "menuButton" element
    hamburgerMenu.addEventListener("click", () => {
        // Check if the "dropdown" element has the class "dropdown-open"
        if (dropDown.classList.contains("dropdown-open")) {
            // If the dropdown is open, close it and change the icon back to the hamburger menu
            dropDown.classList.remove("dropdown-open");
            hamburgerMenu.src = "../icons/hamburger_menu.svg"; 
        } else {
            // If the dropdown is closed, open it and change the icon to an "X"
            dropDown.classList.add("dropdown-open");
            hamburgerMenu.src = "../icons/x.svg"; // Replace with your "X" icon path
        }
    });
}
// Call the function to set up the event listener
showHide();