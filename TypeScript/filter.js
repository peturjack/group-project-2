"use strict";
function dropDown() {
    const filterDropdown = document.getElementById("filter-dropdown");
    const filterIcon = document.getElementById("filter-icon");
    const container = document.getElementById("page2"); // Replace "container" with the actual ID of your container element
    if (!filterDropdown || !filterIcon || !container) {
        return;
    }
    filterIcon.addEventListener("click", () => {
        if (filterDropdown.classList.contains("filter-dropdown-open")) {
            filterDropdown.classList.remove("filter-dropdown-open");
            container.classList.remove("filter-blur"); // Remove blur class
        }
        else {
            filterDropdown.classList.add("filter-dropdown-open");
            container.classList.add("filter-blur"); // Add blur class
        }
    });
}
dropDown();