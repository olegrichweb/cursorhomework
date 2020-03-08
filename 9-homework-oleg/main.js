const main_block = document.getElementById("main_block")
const blockValue = 25;
const colorValue = 256;
const getRandomColor = () => {return Math.floor(Math.random() * colorValue)};
function generateBlocks () { 
    main_block.innerHTML = "";
    for(let i=0; i < blockValue; i++) {
        const child_block = document.createElement("div");
        child_block.classList.toggle("child_block")
        child_block.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
        main_block.append(child_block);
    };
    return main_block
};
generateBlocks();

function generateBlocksInterval () {
setInterval(() => {
    generateBlocks();
}, 1000);
};
generateBlocksInterval();