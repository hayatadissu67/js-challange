// used them to separate the reult to make it readable
console.log(" ");
console.log("Q10");
//----------------------------------------------
const inventory = [
  { sku: "A1", name: "pen", stock: 40, restock: 10 },
  { sku: "B2", name: "notebook", stock: 5, restock: 10 },
  { sku: "C3", name: "eraser", stock: 0, restock: 20 },
  { sku: "D4", name: "ruler", stock: 25, restock: 10 },
];

function status(stock, restock) {
  if (stock === 0) {
    return "OUT";
  } else {
    return stock <= restock ? "LOW" : "OK";
  }
}

const format10 = ({ name, stock, restock }) => {
  return `${name.toUpperCase()}: ${stock} in stock ${status(stock, restock)}`;
};
const formatted10 = inventory.map(format10);
for (const inventory of formatted10) {
  console.log(inventory);
}

const compare = inventory
  .filter((inventory) => inventory.stock <= inventory.restock)
  .map((inventory) => inventory.name);
console.log(`Items to restock: ${compare.join(", ")}`);

const totalUnits = inventory.reduce(
  (sum, inventory) => sum + inventory.stock,
  0,
);
console.log(`Total units: ${totalUnits}`);

const fistOutOfStack = inventory.find((inventory) => inventory.stock === 0);
console.log(`First out of stock: ${fistOutOfStack?.name ?? "none"}`);

const everythingIn = inventory.every((inventory) => inventory.stock > 0);

console.log(`Everything in stock: ${everythingIn}`);

const lowestStock = Math.min(...inventory.map((inventory) => inventory.stock));
console.log(`Lowest stock level: ${lowestStock}`);
