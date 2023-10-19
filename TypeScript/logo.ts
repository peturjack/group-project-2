//logo animation
let rem: number = 0;
let logoAnimation: HTMLImageElement | null = document.querySelector(".logoAnimation img");
setInterval(function() {
    if (logoAnimation === null || -7.3*7 >= rem) {return}
    rem -= 7.3
    logoAnimation.style.marginTop = rem + "rem"
}, 150)