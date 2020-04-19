

function* createIdGenerator() {
    let i = 0;
    while(true){
        yield i++;
    };
};

const idGenerator = createIdGenerator();
const str = document.getElementById(`string`)
const btnGen = document.querySelector(".button-gen");
btnGen.onclick = function(){
    return str.innerHTML = `${idGenerator.next().value} number`;
};


const sizeFont = 14;
const fontGenerator = newFontGenerator(sizeFont);
function* newFontGenerator(font) {
    while(true){
        let size = yield font;
        if(size === `up`) {
            ++font;
        };
        if(size === `down`) {
            --font;
        };
    };
};

const upBtn = document.querySelector(".up");
const downBtn = document.querySelector(`.down`);
const text = document.querySelector(`.text`);
upBtn.onclick = function() {
    return text.style.fontSize = fontGenerator.next(`up`).value + `px`;
};

downBtn.onclick = function() {
    return text.style.fontSize = fontGenerator.next(`down`).value + `px`;
};