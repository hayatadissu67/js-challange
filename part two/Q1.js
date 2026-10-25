console.log("Q1")

const employees = [
  { name: "Abel", salary: 8000, dept: "eng" },
  { name: "sara", salary: 12000, dept: "sales" },
  { name: "kal", salary: 9500, dept: "eng" },
  { name: "dawit", salary: 7000, dept: "sales" },
  { name: "marta", salary: 15000, dept: "eng" },
];

function tier(salary) {
    if(salary >= 12000){
        return "senior";
    } else if(salary >= 9000){
        return "mid";
    }else {"junior"}
}

const format = ({name, salary, dept}) => {
    return `${name} (${dept}) - ${salary} birr - ${tier(salary)}`
}

const formatEmp = employees.map(format)
for (const employees of  formatEmp){
    console.log(employees)
}

const higher = employees.find((employees) => employees.salary > 10000)
console.log(`First high earner: ${higher.name}`);

const under = employees.some((employees) => employees.salary < 8000)
const above = employees.every((employees) => employees.salary > 5000)
console.log(`Anyone under 8000: ${under}`);
console.log(`Anyone over 5000: ${above}`);

const totalsal = employees.reduce((sum, employees)=> sum + employees.salary, 0)
let averageSalary = totalsal/employees.length
console.log(`Average salary: ${averageSalary} birr`);

const salaries = employees.map((employees) => employees.salary)
const highest = Math.max(...salaries)
const lowest = Math.min(...salaries)
console.log(`Highest: ${highest}, Lowest: ${lowest}`);