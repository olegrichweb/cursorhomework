export const stud = ["Саша", "Игорь", "Лена", "Ира", "Алексей", "Светлана"];
const themes = ["Дифференциальные уравнения", "Теория автоматов", "Алгоритмы и структуры данных"];
const marks = [4, 5, 5, 3, 4, 5];

//#1
 export function getPairStudents() {
return [[stud[0], stud[2]], [stud[1], stud[3]], [stud[4], stud[5]]];
};

export const pairs = getPairStudents(stud);



