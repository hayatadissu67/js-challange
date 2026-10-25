// used them to separate the reult to make it readable
console.log(" ");
console.log("Q3");
//----------------------------------------------
const week = [
  { day: "Monday", temp: 21 },
  { day: "Tuesday", temp: 28 },
  { day: "Wednesday", temp: 31 },
  { day: "Thursday", temp: 19 },
  { day: "Friday", temp: 26 },
];

function describe(temp) {
  if (temp >= 30) {
    return "hot";
  } else if (temp >= 25) {
    return "warm";
  } else {
    return "cool";
  }
}

const formatDay = ({ day, temp }) =>
  `${day.toUpperCase()}: ${temp}°C ( ${describe(temp)})`;

const formattedDay = week.map(formatDay);
for (const week of formattedDay) {
  console.log(week);
}

const warmer = week.filter((week) => week.temp >= 25);
console.log(`Warm or hot days: ${warmer.length}`);

const totalTemp = week.reduce((sum, week) => sum + week.temp, 0);
let totalTemprature = totalTemp;
console.log(`Average temperature: ${totalTemprature}°C`);

const fullWeek = [{ day: "Saturday", temp: 24 }];

const full = [...week, fullWeek];

console.log(`Days recorded after adding Saturday: ${full.length}`);
