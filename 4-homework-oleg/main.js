const students = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

//#1
function getPairStudents(students) {
return [[students[0], students[2]], [students[1], students[3]], [students[4], students[5]]];
};

const pairs = getPairStudents(students);
console.log(pairs);


//#2
function joinThemesToPairs (pairs, themes){
    const themesToPairs = [];
    for(let i=0; i<pairs.length; i++){
        themesToPairs.push([pairs[i].join(' и '), themes[i]]);
    };
    return themesToPairs;
};
const themesToPairs = joinThemesToPairs(pairs, themes)
console.log(themesToPairs);


//#3
function joinMarksToStudents(marks, students){
    const marksToStudents = [];
    for(let j=0; j<students.length; j++){
        marksToStudents.push([students[j],marks[j]])
    };
    return marksToStudents; 
};
const marksToStudents = joinMarksToStudents(marks, students)
console.log(marksToStudents);

//#4
function getRandomMark(marks){
    const minM = 1;
    const maxM = 2;
    return Math.floor(Math.random() * (maxM + 1 - minM) + minM);
};
const rendomMark = getRandomMark(marks);
function joinRandomMarkToPairsWsThemes (themesToPairs, marks) {
    const randomMarkToPairs = [];
    for(let i = 0; i<themesToPairs.length; i++){
        randomMarkToPairs.push([...themesToPairs[i], rendomMark]);
    };
    return randomMarkToPairs;
};
const randomMarkToPairs = joinRandomMarkToPairsWsThemes(themesToPairs, marks);
console.log(randomMarkToPairs);