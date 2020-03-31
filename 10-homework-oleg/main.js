
// const soundObj = {
//    65: new Audio('./audio/Oleg Maestro - KALENDAR.mp3'),
//   83: new Audio(`./audio/oleg maestro - 95й.mp3`),
//    68: new Audio(`./audio/Oleg Maestro - Зима, 2013.mp3`),
//    70: new Audio(`./audio/oleg maestro - олежкин рэп [part 2].mp3`),
//     71: new Audio(`./audio/oleg maestro - Сияй моё солнце (dirty).mp3`),
//    72: new Audio(`./audio/oleg maestro 2020 SPECNAZ.mp3`),
//    74: new Audio(`./audio/oleg_maestro_Снег_кружится_летает.mp3`),
//    75: new Audio(`./audio/the katakomb clan Gin47%, Женя Где - музыка.mp3`),
//    76: new Audio(`./audio/Oleg Maestro - Алёна (Огни маяка).mp3`),
// };

// const keys = document.querySelectorAll(`.key`);
//    keys.addEventListener(`click`,  () => {
//        let id = document.querySelectorAll(`.data-key`);
//        keys(id) = soundObj[key];
//        playSound(soundObj[key]);
//    });


function playSoundMous(e) {
    let keyId = document.querySelector(`.key[data-key]`);
    let suundId = document.querySelector(`audio[data-key]`);
    if(keID === e){
    keyId = suundId;
    suundId.currentTime = 0;
    suundId.play();
    };
    document.addEventListener(`play`, e => {
        if(sound && sound != e.target) {
            suundId.pause();
        }
        suundId = e.target;
    },
    true
    );
};

Array.from (document.getElementsByClassName(`key`)).forEach((el) =>{
    el.addEventListener(`click`, () => {
        const keyCode = el.getAttribute(`data-key`);
        return playSound({keyCode})
    } )
});

function playSound (e) {
    const keY = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        if(!sound) return;
        sound.currentTime = 0;
        sound.play();
        keY.classList.add('playing');

    document.addEventListener('play', e => {
        if(sound && sound != e.target) {
            sound.pause();
        }
        sound = e.target;
    },
    true
    );
};




document.addEventListener(`keydown`, playSound);