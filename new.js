// question one

const students = [
  { name: "abel", score: 85, subject: "math" },
  { name: "sara", score: 42, subject: "math" },
  { name: "kalkidan", score: 91, subject: "math" },
  { name: "dawit", score: 67, subject: "math" },
];

function getGrade(score) {
  if (score >= 80) {
    return "A";
  } else if (score >= 60) {
    return "B";
  } else {
    return "f";
  }
} 
const formatStudent = ({ name, score }) => {
  return `${name.toUpperCase()} scored ${score} Grade -> ${getGrade(score)}`;
};

const formattedStudents = students.map(formatStudent);

for (const students of formattedStudents) {
  console.log(students);
}

const passed = students.filter((students) => students.score >= 60);

console.log(`passed: ${passed.length} outof ${students.length}`);

const total = students.reduce((sum, students) => sum + students.score, 0 );

let average = total/students.length;

console.log("class average:" + average)

const student = {
  name: "Marta",
  score: 78,
  subject: "Math",
};

const allStudents = [...students, student]
console.log("New class size after adding marta:" + allStudents.length)

//----------------------------------------------------------

// question two


