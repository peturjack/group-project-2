//logo animation
let rem: number = 0;
let logoAnimation: HTMLImageElement | null = document.querySelector(".logoAnimation img");
setInterval(function() {
    if (logoAnimation === null || -7.3*7 >= rem) {return}
    rem -= 7.3
    logoAnimation.style.marginTop = rem + "rem"
}, 150)

//sheep animation
let id: number = 0;
function mySheep() {
    let sheep: HTMLImageElement | null = document.querySelector(".sheep img");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 0.2);
    function frame(){
        if (pos >= 390) {
            clearInterval(id);
        } else {
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