"use strict";
let id = 0;
function mySheep() {
    let sheep = document.querySelector(".sheep img");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 0.2);
    function frame() {
        if (pos >= 390) {
            clearInterval(id);
        }
        else {
            if (sheep === null) {
                clearInterval(id);
                return;
            }
            pos++;
            sheep.style.position = "absolute";
            sheep.style.left = pos + "px";
        }
    }
}
