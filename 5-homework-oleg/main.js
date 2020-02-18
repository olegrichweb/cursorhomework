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

