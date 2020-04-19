async function getRandomChinese (length) {
        let result = '';
        try {
        const timeRes = 50;
    for (let i = 0; i < length; i++) {
        const promise = new Promise (resolve => {
                setTimeout(() => {
        const sign = Date.now().toString().split('').reverse().slice(0,5).join('');
                resolve (String.fromCharCode(sign)); 
        }, timeRes);
    });
                result += await promise
    };
    console.log(result);
     return result 
} catch (error) {
console.log(`Lol`)
};
};
getRandomChinese(4).then((result) => {
    console.log(result)
});
document.writeln(`Look in the console`)