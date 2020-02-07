let n = Number(prompt('Введите стартовое число', 10));
if(Number.isInteger(n)){
    console.log(n);
} else {
    Number(prompt('Это не подходящее число, введите целое число', 10));
};
let m = Number(prompt('Введите конечное число', 100));
if(Number.isInteger(m)){
    console.log(m);
} else {
    Number(prompt('Это не подходящее число, введите целое число', 100));
};
let checkup = confirm('Нужно пропускать четные числа?');
if(checkup === true){
    console.log('НУЖНО');
} else {
    console.log('НЕНУЖНО');
};
let resultNum = 0;
for (let i=n; i<=m; i++)
if(checkup === true) {
    if(i % 2 === 0) {
        continue;
    }
    resultNum += i;
} else {
    resultNum +=i;
}
console.log(resultNum);
document.writeln(`Стартовое число: ${n}`)
document.writeln(`Конечное число: ${m}`)
document.writeln(`Результат: ${resultNum}`)