// used them to separate the reult to make it readable
console.log(" ");
console.log("Q8");
//----------------------------------------------
const expenses = [
  { note: "lunch", amount: 150, tag: "food" },
  { note: "taxi", amount: 90, tag: "transport" },
  { note: "dinner", amount: 220, tag: "food" },
  { note: "bus", amount: 30, tag: "transport" },
  { note: "movie", amount: 120, tag: "fun" },
];

function level(amount) {
  if (amount >= 200) {
    return "big";
  } else if (amount >= 100) {
    return "medium";
  } else {
    return "small";
  }
}

const format8 = ({ note, amount, tag }) => {
  return `${note.toUpperCase()} -${amount} birr[${tag}] ${level(amount)}`;
};

const formatted8 = expenses.map(format8);
for (const expenses of formatted8) {
  console.log(expenses);
}

const grandTotal = expenses.reduce((sum, expenses) => sum + expenses.amount, 0);
console.log(`Total spent: ${grandTotal}`);

const foodEx = expenses.filter((expenses) => expenses.tag === "food");
const foodExpense = foodEx.reduce((sum, expense) => sum + expense.amount, 0);
console.log(`Food spending: ${foodExpense} birr`);

const biggestExpense = expenses.reduce((biggest, expense) => {
  return expense.amount > biggest.amount ? expense : biggest;
});
console.log(
  `Biggest expense: ${biggestExpense.note} (${biggestExpense.amount} birr)`,
);

const checkOver = expenses.some((expenses) => expenses.amount > 200);
console.log(`Any single expense over 200: ${checkOver}`);

const bigCount = expenses.filter((expenses) => expenses.amount > 200);
console.log(`Big expenses: ${bigCount.length}`);
