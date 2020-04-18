
const soundObj = {
    '65': new Audio(`./audio/Oleg Maestro - KALENDAR.mp3`),
    '83': new Audio(`./audio/oleg maestro - 95й.mp3`),
    '68': new Audio(`./audio/Oleg Maestro - Зима, 2013.mp3`),
    '70': new Audio(`./audio/oleg maestro - олежкин рэп [part 2].mp3`),
    '71': new Audio(`./audio/oleg maestro - Сияй моё солнце (dirty).mp3`),
    '72': new Audio(`./audio/oleg maestro 2020 SPECNAZ.mp3`),
    '74': new Audio(`./audio/oleg_maestro_Снег_кружится_летает.mp3`),
    '75': new Audio(`./audio/арчиоле20202_2.mp3`),
    '76': new Audio(`./audio/Oleg Maestro - Алёна (Огни маяка).mp3`),
};
Object.keys(soundObj).forEach(key => {
    soundObj[key].addEventListener('play', (e) => {
        stopAllExceptCurrentAudio(e.target);
        removePlaing(e.keyCode);
    }, true);
})
function playSound (id) {
const audio = soundObj[id];
const keY = document.querySelector(`.key[data-key="${id}"]`);
    if(!audio) return;
    audio.play();
    audio.currentTime = 0;
    keY.classList.add('playing');
};

function stopAllExceptCurrentAudio (currentSource) {
    Object.keys(soundObj).forEach(sound => {
        if(soundObj[sound] != currentSource) {
            soundObj[sound].pause();
            
        };
    });
};
function removePlaing (item) {
    if(item.propertyName !== 'transform') return;
    this.classList.remove('playing');
};
window.addEventListener(`keydown`, e => {playSound(e.keyCode)});
const keys = document.querySelectorAll(`.key`);
keys.forEach(el => el.addEventListener('transitionend', removePlaing));
keys.forEach(elem => {
    elem.addEventListener(`click`, function() {
        playSound(this.getAttribute('data-key'));
    });
    });