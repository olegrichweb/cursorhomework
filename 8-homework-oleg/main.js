//#1

class Student {
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
let bender = new Student(`Высшей Школы Мошенничества г. Одесса`, `1`, `Остап Родоманський Бендер`);
console.log(Student);
console.log(bender.getInfo());
console.log(bender.marks);
bender.marks = 5;
console.log(bender.marks);
console.log(bender.getAverageMark());
bender.dismis();
console.log(bender.marks);
bender.marks = 3;
console.log(bender.marks);
bender.recover();
bender.marks = 3;
console.log(bender.marks);

class BudgetStudent extends Student {
    constructor (university, course, fullName) {
        super(university, course, fullName);
        this.controlMark = 4;
        this.timer();
    };
    getScholarship () {
        if(this.getAverageMark() >= this.controlMark && !this.dismised){
            console.log(`Вы получили 1400 грн стипендии`);
                 } else {
            console.log(`Вас исключили`)
        };
    };
    timer(){
        setInterval(() => { this.getScholarship()   
        }, 30000);
    };
};

let supperBender = new BudgetStudent();

supperBender.marks = 5;
supperBender.marks = 5;
supperBender.marks = 4;
supperBender.getScholarship();