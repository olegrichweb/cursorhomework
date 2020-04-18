
const soundObj = {
    '65': new Audio('./audio/Oleg Maestro - KALENDAR.mp3'),
    '83': new Audio(`./audio/oleg maestro - 95й.mp3`),
    '68': new Audio(`./audio/Oleg Maestro - Зима, 2013.mp3`),
    '70': new Audio(`./audio/oleg maestro - олежкин рэп [part 2].mp3`),
    '71': new Audio(`./audio/oleg maestro - Сияй моё солнце (dirty).mp3`),
    '72': new Audio(`./audio/oleg maestro 2020 SPECNAZ.mp3`),
    '74': new Audio(`./audio/oleg_maestro_Снег_кружится_летает.mp3`),
    '75': new Audio(`./audio/the katakomb clan Gin47%, Женя Где - музыка.mp3`),
    '76': new Audio(`./audio/Oleg Maestro - Алёна (Огни маяка).mp3`),
};
let audio = null;


function playSound (id) {
audio = soundObj[id];
const keY = document.querySelector(`.key[data-key="${id}"]`);
    if(!audio) return;
    audio.play();
    audio.currentTime = 0;
    keY.classList.add('playing');
};
document.addEventListener(`keydown`, e => playSound(e.keyCode));


function removePlaing () {
    keY.classList.remove(`playing`);
};

const keys = document.querySelectorAll(`.key`);



document.addEventListener(`play`, e => {
    console.log(`hello`);
    if (audio && audio != e.target) {
        audio.pause();
    }
    audio = e.target;
},
true
);