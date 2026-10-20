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
console.log("end of question one ")
console.log("    ")
console.log("    ");

// question two

const cart = [
    {name: "apple", price: 10, quantity: 3},
    {name: "bread", price: 25, quantity: 1},
    {name: "milk", price: 18, quantity: 2},
    {name: "chocolate", price: 55, quantity: 1}
]

function itemTotal(item) {
    return item.price * item.quantity;
}

const formatItem = ({name, price, quantity}) => {
    return `${name.toUpperCase()} x${quantity} = ${itemTotal({price, quantity})} birr`
}
const formattedItem = cart.map(formatItem)

for (const item of formattedItem) {
    console.log(item)
}

const expense = cart.filter((cart) => cart.price >= 20);
console.log(`Expensive items (over 20 birr): ${expense.length}`)

const totali = cart.reduce((sum, cart ) => sum + cart.price * cart.quantity, 0 )
let grandTotal = totali;
console.log(`Grand total: ${grandTotal} birr`);

if (totali > 100) {
  console.log("Free delivery unlocked!");
} else {
  console.log("Add more items for free delivery.");
}

const newItem = [
   { name: "water", price: 8, quantity: 6}
]

const afterAddition = [...cart, newItem]
console.log(`Cart now has ${afterAddition.length} items`);

 console.log("    ");
console.log("end of question two ")
console.log("    ")
console.log("    ");

// question three

const week = [
  { day: "Monday", temp: 21 },
  { day: "Tuesday", temp: 28 },
  { day: "Wednesday", temp: 31 },
  { day: "Thursday", temp: 19 },
  { day: "Friday", temp: 26 },
];

function describe(temp){
    if (temp >= 30){
        return "hot"
    } else if (temp >= 25 ){
        return "warm"
    } else{
        return "cool"
    }
}

const formatDay = ({ day, temp }) => `${day.toUpperCase()}: ${temp}°C ( ${describe(temp)})`;

const formattedDay = week.map(formatDay)
for (const week of formattedDay) {
    console.log(week);
}

const warmer = week.filter((week) => week.temp >= 25)
console.log(`Warm or hot days: ${warmer.length}`);

const totalTemp = week.reduce ((sum, week) => sum + week.temp, 0);
let totalTemprature = totalTemp;
console.log(`Average temperature: ${totalTemprature}°C`);

const fullWeek = [{ day: "Saturday", temp: 24 }];

const full =[...week, fullWeek];

console.log(`Days recorded after adding Saturday: ${full.length}`);

