const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];
  //Task #1.
 function getSubjects (students)  {
    const firstSubj = Object.keys(students.subjects);
    studWsSub = firstSubj.map(function (val) {
        let subName = val.charAt(0).toUpperCase() + val.slice(1).replace(/\_/, ' ');
    return subName;
     });
     return studWsSub;
 };
 console.log(getSubjects(students[0]));
 document.writeln(`Список предметов для студента: ${getSubjects(students[0])}`);

 //Task #2.
 function getAverageMark (students) {
    const studMarks = Object.values(students.subjects).flat();
    return Number((studMarks.reduce((sum, cur) => {
        return sum + cur
     }, 0) / studMarks.length).toFixed(2));
    
 };
 console.log(getAverageMark(students[0]));
 document.writeln(`<p>Средняя оценка студента: ${getAverageMark(students[0])}</p>`);

//Task #3.
function getStudentsInfo (students) {
   const student = {};
   student.name = students.name;
   student.course = students.course;
   student.averageMark = Number(getAverageMark(students));
   return student;
};
console.log(getStudentsInfo(students[0]));
document.writeln(`<p>Информация про студентов: ${getStudentsInfo(students[0])}</p>`)

//Task #4. 
function getStudentsNames (students) {
    return students.map(function(getStudents) {
        let {name} = getStudents;
        return name;
    }).sort();
};
console.log(getStudentsNames(students));
document.writeln(`<p>Список студентов: ${getStudentsNames(students)}</p>`)

//Task #5.

function getBestStudent (students) {
    return students.reduce((cur, prev) => getAverageMark(cur) > getAverageMark(prev) ? cur:prev).name
};
console.log(getBestStudent(students));
document.writeln(`<p>Лучший студент: ${getBestStudent(students)}</p>`)

//Task #6.

function calculateWordLetters(word) {
    const calculateLet = {};
    for(i=0; i<word.length; i++) {
        word[i] in calculateLet ? calculateLet[word[i]] += 1 : calculateLet[word[i]] = 1;4
    };
    return calculateLet;
};
console.log(calculateWordLetters('тест'));
document.writeln(`<p>Обьект из стринги: ${calculateWordLetters('тест')}</p>`);
