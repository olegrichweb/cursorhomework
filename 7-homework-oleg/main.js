const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


// №1.

function getSalary (salary) {
    return this.tax * salary;
};
console.log(`Налог в указанной стране составляет: ${getSalary.call(ukraine, 3350)}`)
document.writeln(`Налог, в указанной стране, составляет: ${getSalary.call(ukraine, 3350)}`)

// №2

function getMiddleTaxes (country) {
    return this.tax * this.middleSalary;
};
console.log(`Средний налог в стране составляет: ${getMiddleTaxes.call(ukraine)}`);
document.writeln(`<p>Средний налог в стране составляет: ${getMiddleTaxes.call(ukraine)}</p>`);

// №3 

function getTotalTaxes(country) {
    return this.tax * this.middleSalary * this.vacancies;
};
console.log(`Общее колличество налогов в стране: ${getTotalTaxes.call(ukraine)}`);
document.writeln(`Общее колличество налогов в стране: ${getTotalTaxes.call(ukraine)}`);

// №4

function getMySalary (country) {
    const minSalary = 1500;
    const maxSalary = 2000;
    const timeInt = 10000;
    
    let clock = setTimeout(run = () => {
        const salary = Number(Math.floor(Math.random() * (maxSalary - minSalary) + minSalary));
        const taxes = Number(salary * country.tax).toFixed(2);
        const profit = Number(salary - taxes).toFixed(2);
        const result = {salary, taxes, profit};
        console.log(result);
        clock = setTimeout(run, timeInt);
    }, timeInt);
};
console.log(getMySalary(ukraine));
document.writeln(`<p>Случайные значения: В конслоли</p>`);