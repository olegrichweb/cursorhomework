//////FUNCTION 1 
////////////////////////////////////////////
const getMaxDigit = (number) =>{
    const numToStr = number.toString();
        return Math.max(...numToStr);
};

//////FUNCTION 2
/////////////////////////////////////////////
const getPowNum = (num, pow) => {
    let result = num;
            if(pow === 0) {
        result = 1;
            } else {
        for(let i=1; i<pow; i++) {
            result *= num;
        };
    };
        return result;
};


//////FUNCTION 3
// Создать функцию, которая форматирует имя, делая первую букву заглавной. ("влад" -> "Влад", "вЛАД" -> "Влад" и так далее);
const nameToUpperCase = (name) => {
    const firstL = name.charAt(0).toUpperCase();
    const anatherL = name.substring(1).toLowerCase();
        return firstL + anatherL;
};

//////FUNCTION 4
//Создать функцию, которая вычисляет сумму оставшуюся после оплаты налога от заработной платы. (Налог = 18% + 1.5% -> 19.5%). Пример: 1000 -> 805
const sumAfterTax = (value) => {
    const brutto = Number(value);
    const paidTaxes = 18;
    const armyTaxes = 1.5;
    const taxes = (paidTaxes+armyTaxes)/100;
        return (brutto - brutto * taxes).toPrecision();
};

//////FUNCTION 5
//Создать функцию, которая возвращает случайное целое число в диапазоне от N до M. Пример: getRandomNumber(1, 10) -> 5
export const getRandomNumber = (min, max) => {
    const n = Math.ceil(min);
    const m = Math.floor(max);
        return Math.floor(Math.random() * (m - n)) + n;
};

//////FUNCTION 6
//Создать функцию, которая считает сколько раз определенная буква повторяется в слове. Пример: countLetter("а", "Асталависта") -> 4
const clacLetter = (letter, str) => {
    let result = 0;
    str.toLowerCase().split('').find(a => {
        if(a === letter) {
            result++;
        };
      });
    return result;
};

//////FUNCTION 7
//Создайте функцию конвертиующую доллары в гривны и наоборот в зависимости от наличия символа $ или UAH в строке. Пример: convertCurrency("100$") -> 2500 грн. или convertCurrency("2500UAH") -> 100$
const convertMoney = (summ) => {
    const course = 25;
    if(summ[summ.length - 1] === '$') {
        return parseInt(summ.substring(0, summ.length - 1)) * course + "UAH";
    };
    if(summ.substring(summ.length - 3).toLowerCase() === 'uah') {
        return parseInt(summ.substring(0, summ.length - 3)) / course + "$";
    } else {
        throw new Error(`Валюта не поддерживаеться!`);
    };
};

//////FUNCTION 8
//Создайте функцию генерации случайного пароля (только числа), длинна устанавливается пользователем или по умолчанию = 8 символам.
//Пример: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124
const getRandomPassword = (numbersLength) => {
    numbersLength === 0 ? 8 : numbersLength;
    let pasword = '';
    for (let i = 0; i<numbersLength; i++) {
        pasword += Math.floor(Math.random()*10);
    };
    return pasword;
};

//////FUNCTION 9
//Создайте функцию, которая удаляет все буквы из предложения. Пример: deleteLetters('a', "blablabla") -> "blblbl"
const deleteLetters = (lett, string) => {
    return string.toLowerCase().split('').filter(item => item !== lett).join('');
};

////****************************/


