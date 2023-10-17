"use strict";
//sheep animation
let id = 0;
function mySheep() {
    let sheep = document.querySelector(".sheep img");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 50);
    function frame() {
        if (pos >= 360) {
            clearInterval(id);
        }
        else {
            if (sheep === null) {
                clearInterval(id);
                return;
            }
            pos++;
            sheep.style.position = "absolute";
            sheep.style.left = pos + "rem";
        }
    }
}
