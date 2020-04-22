import {getAverageMark, students} from './homeworks/hw6';
// console.log(students)
const hw6Btn = document.getElementById("homework 6");
const hw6str = document.querySelector('.string6');
hw6Btn.onclick = function () {
hw6str.innerHTML = `Средняя оценка: ${getAverageMark(students[0])}`
};

import {milk, chiken, beef, sumCost, minPrice, maxPice} from "./homeworks/hw1";
const hw1btn = document.getElementById('homework 1');
const hw1str = document.querySelector('.string1');
hw1btn.onclick = function () {
    hw1str.innerHTML = `Min price: ${minPrice}, Max price: ${maxPice}, Sum of cost: ${sumCost}`;
};



const hw2btn = document.getElementById('homework 2');
const hw2str = document.querySelector('.string2');
hw2btn.onclick =  function () {
    hw2str.innerHTML = `Result in console`
    const hw2 = import( './homeworks/hw2');
    return hw2;
};

import {getRandomNumber} from "./homeworks/hw3";
const hw3btn = document.getElementById('homework 3');
const hw3str = document.querySelector('.string3');
hw3btn.onclick = function () {
    hw3str.innerHTML = `Случайное целое число: ${getRandomNumber(10, 50)}`;
};

import {getPairStudents, stud} from "./homeworks/hw4";
const hw4btn = document.getElementById('homework 4');
const hw4str = document.querySelector('.string4');
hw4btn.onclick = function () {
    hw4str.innerHTML = `Пары студентов: ${getPairStudents(stud)}`;
};

import {getRandomArray} from "./homeworks/hw5";
const hw5btn = document.getElementById('homework 5');
const hw5str = document.querySelector('.string5')
    hw5btn.onclick = function () {
        hw5str.innerHTML = `Функция на создание массива случайных чисел: ${getRandomArray(7,10,74)}`;
};

import {ukraine, getMyTaxes} from "./homeworks/hw7";
const hw7btn = document.getElementById('homework 7');
const hw7str = document.querySelector('.string7');
    hw7btn.onclick = function () {
        hw7str.innerHTML = `Налоги в моей стране составляют: ${getMyTaxes(ukraine)}`;
    };


import {Student, bender} from "./homeworks/hw8";
const hw8btn = document.getElementById('homework 8');
const hw8str = document.querySelector('.string8');
    hw8btn.onclick = function () {
        hw8str.innerHTML = `${bender.getInfo()}`;
    };


import './homeworks/hw9.css';
import {generateBlocks, generateBlocksInterval} from "./homeworks/hw9";
const hw9btn = document.getElementById('homework 9');

hw9btn.addEventListener(`click`, function () {
    generateBlocksInterval();
});

import {playSound} from "./homeworks/hw10";
const hw10btn = document.getElementById('homework 10');
hw10btn.addEventListener(`click`, function () {
    playSound();
});

