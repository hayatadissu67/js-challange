// used them to separate the reult to make it readable
console.log(" ");
console.log("Q8");
//----------------------------------------------
const menu = [
  { dish: "doro wat", price: 180, spicy: true },
  { dish: "pasta", price: 120, spicy: false },
  { dish: "kitfo", price: 200, spicy: true },
  { dish: "salad", price: 90, spicy: false },
];

function spicyLabel(spicy) {
  if (spicy === true) {
    return "🌶 spicy";
  } else {
    return "mild";
  }
}

const formatDish = ({ dish, price, spicy }) => {
  return `${dish.toUpperCase()} - ${price} ${spicyLabel(spicy)}`;
};
const formattedDish = menu.map(formatDish);
for (const menu of formattedDish) {
  console.log(menu);
}

const spicyDishes = menu.filter((menu) => menu.spicy === true);
console.log(`Spicy dishes: ${spicyDishes.length}`);

const totalPrice = menu.reduce((sum, menu) => sum + menu.price, 0);
let totalPr = totalPrice;
console.log(`One of everything: ${totalPr}`);

if (totalPr > 500) {
  console.log("This is a feast!");
} else {
  console.log("A reasonable meal.");
}

const newDish = [{ dish: "tibs", price: 190, spicy: true }];

const fullMenu = [...menu, newDish];
console.log(`Menu now has ${fullMenu.length} dishes`);
