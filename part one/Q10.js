 // used them to separate the reult to make it readable
console.log(" ")
console.log("Q10")
//----------------------------------------------
 const transactions = [
  { label: "salary", amount: 5000, type: "deposit" },
  { label: "rent", amount: -2000, type: "withdrawal" },
  { label: "groceries", amount: -750, type: "withdrawal" },
  { label: "freelance gig", amount: 1200, type: "deposit" },
  { label: "internet bill", amount: -450, type: "withdrawal" },
];

function direction(amount) {
  if (amount > 0) {
    return "IN";
  } else {
    return "OUT";
  }
}

const formatTx = ({ label, amount }) => {
  return ` ${label.toUpperCase()} : ${amount} birr (${direction(amount)})`;
};

const formattedTx = transactions.map(formatTx);
for (const transactions of formattedTx) {
  console.log(transactions);
}

const deposit = transactions.filter((transactions) =>
  transactions.type.includes("deposit"),
);
console.log(`Deposits:  ${deposit.length} `);

const finalBal = transactions.reduce(
  (sum, transactions) => sum + transactions.amount,
  0,
);
let finalBallance = finalBal;
console.log(`Final balance: ${finalBallance}`);

if (finalBallance > 0) {
  console.log("Account is healthy.");
} else {
  console.log("Warning: overdrawn!");
}

const newTrans = [{ label: "coffee", amount: -80, type: "withdrawal" }];

const fullTrans = [...transactions, newTrans];
console.log(`Transactions after adding coffee: ${fullTrans.length}`);
