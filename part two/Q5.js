// used them to separate the reult to make it readable
console.log(" ");
console.log("Q5");
//----------------------------------------------
const prices = {
  laptop: 45000,
  mouse: 800,
  shirt: 600,
  novel: 350,
  jeans: 1200,
};

for (const [item, price] of Object.entries(prices)) {
  console.log(`${item.toUpperCase()}: ${price} birr`);
}

const printPro = Object.keys(prices);
console.log(`Products: ${printPro.length}`);

const totalVal = Object.values(prices);
const totalValue = totalVal.reduce((sum, prices) => sum + prices, 0);
console.log(`Total value: ${totalValue} birr `);

const expensive = Math.max(...Object.values(prices));
const chip = Math.min(...Object.values(prices));
console.log(`Most expensive: ${expensive}birr, cheapest:  ${chip} birr`);

const arrr = Object.values(prices);
const under4 = arrr.filter((arrr) => arrr < 1000);
console.log(`Under 1000 birr: ${under4.length}`);
