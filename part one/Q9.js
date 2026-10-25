 // used them to separate the reult to make it readable
console.log(" ")
console.log("Q9")
//----------------------------------------------
 const log = [
  { day: "mon", steps: 8200 },
  { day: "tue", steps: 4500 },
  { day: "wed", steps: 10100 },
  { day: "thu", steps: 6200 },
  { day: "fri", steps: 12000 },
];

function goalCheck(steps) {
  if (steps >= 8000) {
    return "goal met";
  } else {
    return "below goal";
  }
}

const formatEntry = ({ day, steps }) => {
  return ` ${day.toUpperCase()} : ${steps} steps (${goalCheck(steps)})`;
};
const formattedEntry = log.map(formatEntry);
for (const log of formattedEntry) {
  console.log(log);
}

const goalMet = log.filter((log) => log.steps >= 8000);
console.log(`Goal met on  ${goalMet.length} days`);

const totalSteps = log.reduce((sum, log) => sum + log.steps, 0);
let totalSt = totalSteps / 5;
console.log(`Daily average: ${totalSt}`);

const newDay = [{ day: "sat", steps: 9500 }];

const fullLog = [...log, newDay];
console.log(`Logged days after Saturday: ${fullLog.length}`);
