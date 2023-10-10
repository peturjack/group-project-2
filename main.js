"use strict";
let rem = 0;
let logoAnimation = document.querySelector(".logoAnimation img");
setInterval(function () {
    console.log("testing");
    if (logoAnimation === null || -9.6 * 8 === rem) {
        return;
    }
    rem -= 9.6;
    logoAnimation.style.marginTop = rem + "rem";
}, 150);
