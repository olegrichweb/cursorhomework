//1.Создайте функцию getRandomArray(length, min, max) – которая возвращает массив случайных целых чисел. В функции есть параметры: length - длина массива, min – минимальное значение целого числа, max – максимальное значение целого числа. Пример: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]
//
function getRandomArray(length, min, max) {
const randomArray = [];
    for(let i=0; i<length; i++){
        randomArray.push(Math.floor(Math.random() * (max - min + 1)) + min);
    };
    return randomArray;
};
console.log(`Функция на создание массива случайных чисел: ${getRandomArray(5, 11, 30)}`);

//2.Создайте функцию getModa(...numbers) – которая вычисляет моду всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ
const countNumbers = (numbers, num) => {
    return numbers.filter(n => n === num).length;
}
function getModa(...numbers) {
const data = numbers.filter(n => n === Math.trunc(n));
let maxCount = 0;
return Array.from(new Set(data)).reduce((acc, cur) => {
        const curentCount = countNumbers(data, cur);
        if(curentCount > maxCount) {
            maxCount = curentCount;
            return acc = [cur];
        } else if(curentCount === maxCount) {
            return acc = [...acc, cur];
        };
        return acc;
    }, []);
};
console.log(`Функция "Мода" : ${getModa(1, 1, 1, 5, 7, 5, 2, 1, 7, 8, 4)}`);


//3.Создайте функцию getAverage(...numbers) – которая считает среднее арифметическое всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ

function getAverage(...numbers) {
    const result = numbers.reduce(function(sum, element) {
       if(Number.isInteger(element)) {
        return sum + element;
       } else {
           return Math.trunc(element) + sum
       };
    } );
    return result/numbers.length;
};
console.log(`Функция нахождения среднего арифметического: ${getAverage(6,5.5,1,7,9.7,1,5,8,11,22,14,78)}`);

//4. Создайте функцию getMedian(...numbers) – которая считает медиану всех переданных в неё аргументов. НЕЦЕЛЫЕ ЧИСЛА ИГНОРИРУЮТСЯ

function getMedian(...numbers) {
    let median = 0;
    let propIndex = 0;
    const sortedNubers = Math.trunc(numbers.sort((a, b) => a - b));
if(numbers.length % 2 !== 0) {
    propIndex = Math.trunc(numbers.length / 2);
    median = numbers[propIndex];
} else {
    propIndex = numbers.length / 2;
    median = (numbers[propIndex - 1] + numbers[propIndex]) / 2;
    };
    return median
};
console.log(`Функция нахождения медианы чисел: ${getMedian(1, 5, 6, 7, 9, 8, 4, 3, 12)}`);


//5. Создайте функцию filterEvenNumbers(...numbers) – которая фильтрует четные числа переданные как аргументы функции

function filterEvenNumbers(...numbers) {
    return  numbers.filter(n => n % 2 !== 0);
};
console.log(`Функция вывода четных чисел: ${filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)}`)

//6. Создайте функцию countPositiveNumbers(...numbers) – которая посчитает количество числел больших 0

function countPositiveNumbers(...numbers) {
    const data = numbers.filter(n => n > 0).flat();
    return data.length;
};
console.log(`Функция подсчета суммы чисел, которые больше нуля: ${countPositiveNumbers(-1, 2, 3, 0, -7, -4, -10, 8, -9, 11)}`);

document.writeln(`<p>Результаты функций:</p>
<p>Функция на создание массива случайных чисел: ${getRandomArray(5, 11, 30)}</p>
<p>Функция "Мода" : ${getModa(1, 1, 1, 5, 7, 5, 2, 1, 7, 8, 4)}</p>
<p>Функция нахождения среднего арифметического: ${getAverage(6,5,1,7,9,1,5,8,11,22,14,78)}</p>
<p>Функция нахождения медианы чисел: ${getMedian(1, 5, 6, 7, 9, 8, 4, 3, 12)}</p>
<p>Функция вывода четных чисел: ${filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11)}</p>
<p>Функция подсчета суммы чисел, которые больше нуля: ${countPositiveNumbers(-1, 2, 3, 0, -7, -4, -10, 8, -9, 11)}</p>`);
