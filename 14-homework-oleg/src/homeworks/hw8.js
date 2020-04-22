//#1

export class Student {
    constructor (university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marksArr = [5, 4, 4, 5];
        this.dismised = false;
};
    getInfo () {
    return `Cтудент ${this.course}го курса, ${this.university}, ${this.fullName}`;
};
getAverageMark (marks) {
    return Number((this.marksArr.reduce((sum, cur) => {
        return sum + cur
     }, 0) / this.marksArr.length).toFixed(1));
};
dismis () {
    return this.dismised = true;
    };
recover () {
        return this.dismised = false;
    };
get marks () {
    if (this.dismised) {
        return null;
    } else {
    return this.marksArr;
    };
};
set marks (val) {
    if (this.dismised) {
        return null;
    } else {
    return this.marksArr.push(val);
};
};
};
export let bender = new Student(`Высшей Школы Мошенничества г. Одесса`, `1`, `Остап Родоманський Бендер`);
