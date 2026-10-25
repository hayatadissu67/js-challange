// used them to separate the reult to make it readable
console.log(" ");
console.log("Q7");
//----------------------------------------------
const matches = [
  { player: "Abel", kills: 12, deaths: 4 },
  { player: "sara", kills: 20, deaths: 5 },
  { player: "kal", kills: 8, deaths: 8 },
  { player: "dawit", kills: 15, deaths: 3 },
];

function ratio(kills, deaths) {
  return deaths === 0 ? kills : Math.round((kills / deaths) * 100) / 100;
}

function tierOf(kills) {
  if (kills >= 4) {
    return "S";
  } else if (kills >= 2) {
    return "A";
  } else {
    return "B";
  }
}
const format7 = ({ player, kills, deaths }) => {
  return `${player.toUpperCase()} — K/D ${ratio(kills, deaths)} — Tier ${tierOf(kills)}`;
};

matches.forEach((match) => {
  console.log(format7(match));
});

const champion = matches.reduce((best, match) => {
  return ratio(match.kills, match.deaths) > ratio(best.kills, best.deaths)
    ? match
    : best;
});

console.log(`Champion: ${champion.player.toUpperCase()}`);

const sTier = matches.filter(
  (match) => tierOf(ratio(match.kills, match.deaths)) === "S",
);

console.log(`S-tier players: ${sTier.length}`);

const totalKills = matches.reduce((sum, match) => {
  return sum + match.kills;
}, 0);

console.log(`Total kills: ${totalKills}`);

const LowDeaths = matches.some((match) => match.deaths <= 3);

console.log(`Someone had 3 or fewer deaths: ${LowDeaths}`);
