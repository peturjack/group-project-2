//sheep animation
let walk: number = 0;
let sheep: HTMLImageElement | null = document.querySelector(".sheep img");
let pos = 0;
clearInterval(walk);
walk = setInterval(frame, 50);
function frame(){
    if (pos >= 360) {
        clearInterval(walk);
    } else {
        if (sheep === null) {
            clearInterval(walk);
            return;
        }
        pos++;
        sheep.style.position = "absolute";
        sheep.style.left = pos + "rem";
    }
}