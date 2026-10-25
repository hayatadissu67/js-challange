// used them to separate the reult to make it readable
console.log(" ");
console.log("Q3");
//----------------------------------------------
const recipes = [
  { name: "pancakes", ingredients: "flour,milk,egg" },
  { name: "omelette", ingredients: "egg,cheese,milk" },
  { name: "toast", ingredients: "bread,butter" },
];

const format3 = ({ name, ingredients }) => {
  const cleaningredients = ingredients.split(",").join(", ");
  return `${name.toUpperCase()}: ${cleaningredients} `;
};
const formated3 = recipes.map(format3);
for (const recipes of formated3) {
  console.log(recipes);
}

const totalIn = recipes.reduce(
  (sum, recipes) => sum + recipes.ingredients.split(",").length,
  0,
);
console.log(`Total ingredients used: ${totalIn}`);

const eggEn = recipes.filter((recipes) => recipes.ingredients.includes("egg"));
console.log(`Recipes with egg: ${eggEn.length}`);

const highestIn = recipes.reduce((max, recipes) =>
  recipes.ingredients.split(",").length > max.ingredients.split(",").length
    ? recipes
    : max,
);
console.log(`Most ingredients: ${highestIn.ingredients.split(",").length}`);
