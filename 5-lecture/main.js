// forEach
const names = ['Anna', 'Ihor', 'Kate', 'Vlad'];

names.forEach((name, index, arr) => {
    console.log(`${index + 1}. My name is ${name}. Next name is ${arr[index+1]}`);
});



// map
const numbers = [2, 4, 8, 16, 32];

const pows = numbers.map(num => {
    return Math.pow(num, 2);
});

//---------------------

const users = [['John', 'Snow'], ['Sam', 'Tarly'], ['Cersei', 'Lannister']];

const fullNames = users.map(userArr => `${userArr[0]} ${userArr[1]}`);

//----------------------
const mathFunctions = [(a,b) => a + b, (c,d) => c * d, (e,f) => e - f];

const results = mathFunctions.map(func => func(8,4));




// filter
const randomNumbers = [89, -40, 0, 34, 16, 95, -55];

const filtered = randomNumbers.filter(num => {
    if (num < 50 && num > 0) {
        return num;
    }
});

const negative = randomNumbers.filter(num => num < 0);

//----------------------

const mixedArray = ['Tomato', 67, true, 'Apple', (a) => a * 10, 'Orange'];

const filteredStrings = mixedArray.filter(el => typeof el === 'string');

//----------------------

const mathFunctionsNew = [(a,b) => a + b, (c,d) => c * d, (e,f) => e - f];

const filteredFuncs = mathFunctionsNew.filter(func => func(8,4) < 15);




// find
const arrOfArrs = [[1,2,3], [4,5,6], [7,8,9]];

const cb = arr => {
    if ((arr[0] + arr[1] + arr[2]) > 10) {
        return true;
    }
};

console.log(arrOfArrs.find(cb));

arrOfArrs.findIndex(cb);


// every
const isPositiveCb = el => el >= 0;

const firstArr = [0, 67, 85, -5, 10, 1];

const firstArrAllPositive = firstArr.every(isPositiveCb);

console.log('firstArrAllPositive', firstArrAllPositive);

const secondArr = [0, 67, 85, 10, 1];

const secondArrAllPositive = secondArr.every(isPositiveCb);

console.log('secondArrAllPositive', secondArrAllPositive);


//----------------------

const mixedTypes = [1, 2, 3, 'ololo', 4, 5];

mixedTypes.every((el, index) => {
    console.log(`Iteration ${index + 1}`);
   return typeof el === 'number';
});



// some

const largeNumbers = [1000, 1500, 900, 2000, 5000];

largeNumbers.some((el, index) => {
    console.log(`Iteration ${index + 1}`);
   return el < 1000;
});



// reduce
const numsToSum = [10, 20, 30, 40, 50];

numsToSum.reduce((accumulator, currentEl) => {
    // console.log('accumulator', accumulator);
    return accumulator + currentEl;
}, 0);


//----------------------


const dimensionalArr = [['aaa', 100], [20, 'bbb'], [30, 'ccc'], ['ddd', 400]];

dimensionalArr.reduce((sum, currentEl) => {
    let res = 0;

    if (typeof currentEl[0] === 'number') {
        res += currentEl[0];
    }

    if (typeof currentEl[1] === 'number') {
        res += currentEl[1];
    }

    return sum + res;
}, 0);




// sort

const numbersToSort = [-5, 8, 0, 4, 6, 7];

numbersToSort.sort();

numbersToSort.push(10, 1000);

numbersToSort.sort();

numbersToSort.sort((a,b) =>  a - b);

//----------------------

const phrase = 'Лупайте сю скалу! Нехай ні жар, ні холод не спинить вас';

phrase.split(' ').sort((a,b) => a.length - b.length);

phrase.split(' ').sort();



// chaining
const arrWithMissingValues = [300, false, null, 900, 1000, undefined, 200];


arrWithMissingValues
    .filter(el => el)
    .sort((a,b) => a - b)
    .map(el => `Product price: ${el}`);
   
   
    const array = [2, 2, 5, [  5, [ 5, [ 6 ] ], 7 ]];
const flatten = arr => arr.reduce => acc.concat.Array.isArray ? flatten(next) : next
), []);