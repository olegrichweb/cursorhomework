
export let audio = null;
export function playSound() {
    audio = new Audio("../src/audio/oleg maestro 2020 SPECNAZ.mp3");
    audio.play();
}