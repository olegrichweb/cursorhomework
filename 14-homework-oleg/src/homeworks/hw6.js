export const students = [{
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
 export function getSubjects (students)  {
    const firstSubj = Object.keys(students.subjects);
    const studWsSub = firstSubj.map(function (val) {
      return val.charAt(0).toUpperCase() + val.slice(1).replace(/\_/, ' ');
     });
     return studWsSub;
 };



 //Task #2.
export function getAverageMark (students) {
    const studMarks = Object.values(students.subjects).flat();
    return Number((studMarks.reduce((sum, cur) => {
        return sum + cur
     }, 0) / studMarks.length).toFixed(2));
    
 };



//Task #3.
export function getStudentsInfo (students) {
   const student = {};
   student.name = students.name;
   student.course = students.course;
   student.averageMark = Number(getAverageMark(students));
   return student;
};


//Task #4. 
export function getStudentsNames (students) {
    return students.map(function(studName) {
        let {name} = studName;
        return name;
    }).sort();
};



//Task #5.

export function getBestStudent (students) {
    return students.reduce((cur, prev) => getAverageMark(cur) > getAverageMark(prev) ? cur:prev).name
};


//Task #6.

export function calculateWordLetters(word) {
    const calculateLet = {};
    for(let i=0; i<word.length; i++) {
        word[i] in calculateLet ? calculateLet[word[i]] += 1 : calculateLet[word[i]] = 1;4
    };
    return calculateLet;
};
