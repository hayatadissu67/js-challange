const countries = [
  { name: "ethiopia", millions: 126, continent: "africa" },
  { name: "kenya", millions: 54, continent: "africa" },
  { name: "japan", millions: 125, continent: "asia" },
  { name: "france", millions: 68, continent: "europe" },
  { name: "egypt", millions: 111, continent: "africa" },
];

const format5 = (country, position) => {
  const { name, continent, millions } = country;
  return `${position} -${millions}m (${continent})`;
};
countries.forEach((country, i) => {
  console.log(format5(country, i + 1));
});

const lot = Math.max(...countries.map((country) => country.millions));
const nlot = Math.min(...countries.map((country) => country.millions));
console.log(`Biggest: ${lot}m, smallest: ${nlot} m`);

const afrCoun = countries.filter((country)=> country.continent === "africa")
const totcount = countries.reduce((sum, countries) => sum+ countries.millions, 0)
console.log(`African countries: ${afrCoun.length}, total ${totcount}m`);

const checkAsia = countries.some((countries) => countries.continent === "asia")
console.log(`Includes an Asian country: ${checkAsia}`);

const averagePop = Math.round(totcount/countries.length);
console.log(`Average population: ${averagePop}M`);
