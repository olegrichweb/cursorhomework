//////FUNCTION 1 
////////////////////////////////////////////
const getMaxDigit = (number) =>{
    const numToStr = number.toString();
        return Math.max(...numToStr);
};
console.log(getMaxDigit(1758954));
//////FUNCTION 2
/////////////////////////////////////////////
const getPowNum = (num, pow) => {
    let result = 1;
    result = num;
        for(let i=1; i<pow; i++) {
            result *= num;
        };
        return result;
};
console.log(getPowNum(2, 4));
//////FUNCTION 3
// Создать функцию, которая форматирует имя, делая первую букву заглавной. ("влад" -> "Влад", "вЛАД" -> "Влад" и так далее);
const nameToUpperCase = (name) => {
    const firstL = name.charAt(0).toUpperCase();
    const anatherL = name.substring(1).toLowerCase();
        return firstL + anatherL;
};
console.log(nameToUpperCase('oLEG'));
//////FUNCTION 4
//Создать функцию, которая вычисляет сумму оставшуюся после оплаты налога от заработной платы. (Налог = 18% + 1.5% -> 19.5%). Пример: 1000 -> 805
const sumAfterTax = (value) => {
    const brutto = Number(value);
    const taxes = (18+1.5)/100;
        return (brutto - brutto * taxes).toPrecision();
};
console.log((sumAfterTax(1000)));
//////FUNCTION 5
//Создать функцию, которая возвращает случайное целое число в диапазоне от N до M. Пример: getRandomNumber(1, 10) -> 5
const getRandomNumber = (min, max) => {
    const N = Math.ceil(min);
    const M = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
};
console.log(getRandomNumber(10, 55));
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
console.log(clacLetter('р', 'Рефрежератор'));
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
        return 'Валюта не поддерживаеться'
    };
};
console.log(convertMoney('10000UAH'));
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
console.log(getRandomPassword(7));
//////FUNCTION 9
//Создайте функцию, которая удаляет все буквы из предложения. Пример: deleteLetters('a', "blablabla") -> "blblbl"
const deleteLetters = (lett, string) => {
    return string.toLowerCase().split('').filter(item => item !== lett).join('');
};
console.log(deleteLetters('d', 'dadedadedadedadee'));
////****************************/

document.writeln(`<p>Функция №1 Найти самое большое число: ${getMaxDigit(1758954)}</p>`);
document.writeln(`<p>Функция №2 Возведение в степень: ${getPowNum(2, 4)}</p>`);
document.writeln(`<p>Функция №3 Имя с большой буквы: ${nameToUpperCase('oLEG')}</p>`);
document.writeln(`<p>Функция №4 Зарплата с вычетом налогов: ${sumAfterTax(1000)}</p>`);
document.writeln(`<p>Функция №5 Случайное целое число из интервала: ${getRandomNumber(10,55)}</p>`);
document.writeln(`<p>Функция №6 Количество букв в слове: ${clacLetter('р', 'Рефрежератор')}</p>`);
document.writeln(`<p>Функция №7 Конвертер валют: ${convertMoney('10000UAH')}</p>`);
document.writeln(`<p>Функция №8 Случайный пароль: ${getRandomPassword(7)}</p>`);
document.writeln(`<p>Функция №9 Удалить заданныек буквы из приложения: ${getRandomPassword('d', 'dadedadedadedadee')}</p>`);