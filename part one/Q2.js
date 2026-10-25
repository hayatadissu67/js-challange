// used them to separate the reult to make it readable
console.log(" ");
console.log("Q2");
//----------------------------------------------
const cart = [
  { name: "apple", price: 10, quantity: 3 },
  { name: "bread", price: 25, quantity: 1 },
  { name: "milk", price: 18, quantity: 2 },
  { name: "chocolate", price: 55, quantity: 1 },
];

function itemTotal(item) {
  return item.price * item.quantity;
}

const formatItem = ({ name, price, quantity }) => {
  return `${name.toUpperCase()} x${quantity} = ${itemTotal({ price, quantity })} birr`;
};
const formattedItem = cart.map(formatItem);

for (const item of formattedItem) {
  console.log(item);
}

const expense = cart.filter((cart) => cart.price >= 20);
console.log(`Expensive items (over 20 birr): ${expense.length}`);

const totali = cart.reduce((sum, cart) => sum + cart.price * cart.quantity, 0);
let grandTotal = totali;
console.log(`Grand total: ${grandTotal} birr`);

if (totali > 100) {
  console.log("Free delivery unlocked!");
} else {
  console.log("Add more items for free delivery.");
}

const newItem = [{ name: "water", price: 8, quantity: 6 }];

const afterAddition = [...cart, newItem];
console.log(`Cart now has ${afterAddition.length} items`);
