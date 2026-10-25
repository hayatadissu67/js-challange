
// used them to separate the reult to make it readable
console.log(" ")
console.log("Q2")
//----------------------------------------------
const students = [
  { name: "abel", correct: 5, total: 5 },
  { name: "sara", correct: 3, total: 5 },
  { name: "kal", correct: 4, total: 5 },
];

function grade(correct, total){
    const percentage = Math.round((correct / total) * 100);
    return percentage >= 80 ? "pass" : "fail";
}

const format2 = ({name, correct, total}) => {
    return `${name.toUpperCase()}: ${correct}/5 ${grade(correct, total)} `;
}

const formated2 = students.map(format2)
for (const students of formated2) {
    console.log(students)
}

const passed = students.filter((students)=> {
    const percentage = Math.round((students.correct / students.total) * 100); 
    return percentage >=80;
})
console.log(`Passed: ${passed.length}  of ${students.length} `);


const best = students.reduce((highest, students) => students.correct > highest.correct ? students : highest)

console.log(`Best:${best.name.toUpperCase()} with ${best.correct}`);

const confirm = students.every((students)=> students.correct > 1 )
console.log(`Everyone scored at least 1: ${confirm}`);

